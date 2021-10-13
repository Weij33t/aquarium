import { calculateWaterAlg } from './calculateWaterAlg'

describe('calculate water', () => {
  it.each`
    data                               | result
    ${[4, 2, 3, 2, 5, 0, 1, 3]}        | ${10}
    ${[0, 0, 0, 0, 0, 0, 0, 0]}        | ${0}
    ${[1, -1, 10]}                     | ${0}
    ${[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]} | ${0}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} | ${0}
    ${[10, 5, 10, 1, 0, 10, 2]}        | ${24}
  `('returns $result when data is $data', ({ data, result }) => {
    expect(calculateWaterAlg(data).totalSum).toBe(result)
  })
})
