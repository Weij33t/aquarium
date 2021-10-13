import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const Container = styled.input`
  width: ${(props) => (props?.defaultValue?.toString().length ?? 10) / 1.05}ch;
  max-width: 150ch;
  min-width: 50vw;
  margin: 10px 0px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  &.coub-config {
    max-width: calc(0.8vw - 2px);
    height: 17px;
    padding: 0;

    outline: none;

    font-size: 12px;
    text-align: center;
  }

  &.wrong {
    border-color: red;
  }
  @media screen and (max-width: 1250px) {
    max-width: 50vw;
  }
`

interface InputTypeProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputTypeProps) => {
  return <Container {...props} />
}
