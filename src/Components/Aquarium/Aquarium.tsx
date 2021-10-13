import { useState } from 'react'
import { Cube } from '../Cube/Cube'

import styled from 'styled-components'
import { calculateWaterAlg } from '../../algotirthms/calculateWaterAlg/calculateWaterAlg'
import { Input } from './../Shared/Input'
import { Button } from './../Shared/Button'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Row = styled.div`
  display: flex;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Aquarium = () => {
  let userConfig = ''
  const CubesClassName = ['empty', 'standard', 'water', 'base']
  const inputConf = [4, 2, 3, 2, 5, 0, 1, 3]
  const [conf, setConf] = useState<number[]>(inputConf)
  const [isWrongInput, setIsWrongInput] = useState(false)

  const generateCubes = (count: number, type: number) => {
    let result: JSX.Element[] = []

    for (let i = 0; i < count; i++) {
      result.push(<Cube key={`${type}${i}`} className={CubesClassName[type]} />)
    }

    return result
  }

  const validateInput = () => {
    const correctsChars = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      ',',
    ]
    setIsWrongInput(false)
    if (userConfig.length > 199) return setIsWrongInput(true)
    for (let letter of userConfig) {
      if (!correctsChars.includes(letter.toString()))
        return setIsWrongInput(true)
    }
    const containsGreaterThanHundred = userConfig
      .split(',')
      .some((c) => +c > 100 || +c < 0)

    if (containsGreaterThanHundred) {
      return setIsWrongInput(true)
    }
    setConf(
      userConfig
        .split(',')
        .map((c) => +c)
        .slice(0, 100)
    )
  }
  return (
    <Container>
      <Row>
        {calculateWaterAlg(conf).matrix.map((water, index) => {
          return (
            <Column key={`${water}${index}`}>
              {generateCubes(Math.max(...conf) - conf[index] - water, 0)}
              {generateCubes(water, 2)}
              {generateCubes(conf[index], 1)}
            </Column>
          )
        })}
      </Row>
      <Row>
        {conf.map((num, index) => (
          <Cube key={`${num}${index}`} className={CubesClassName[3]} />
        ))}
      </Row>
      <Input
        type={'text'}
        placeholder={'Введите высоты столбцов через запятую'}
        defaultValue={userConfig}
        className={`${isWrongInput ? 'wrong' : ''}`}
        onChange={({ target }) => (userConfig = target.value)}
      />
      <Button value={'Применить'} onClick={validateInput} />
    </Container>
  )
}
