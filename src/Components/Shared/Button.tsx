import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0;
  background: #fff;
  border: 1px solid #000;

  &:hover {
    background: #ccc;
  }

  &.add-column {
    width: 19px;
    text-align: center;
  }

  @media screen and (max-width: 1450px) {
    &.add-column {
      font-size: 11px;
      width: 13px;
      text-align: center;
    }
  }
`

interface ButtonTypeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const Button = (props: ButtonTypeProps) => {
  return <Container {...props}>{props.value}</Container>
}
