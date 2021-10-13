import React from 'react'
import styled from 'styled-components'

type CubePropsType = {
  className: string
}

const Container = styled.div`
  width: 0.8vw;
  max-height: 0.7vh;
  height: 0.8vw;
  display: inline-block;
  margin: 0;

  border: 1px solid #000;

  &.standard {
    background: #ed7d31;
  }

  &.water {
    background: #4472c4;
  }

  &.empty {
    background: #fff;
    border-color: #ccc;
  }

  &.base {
    background: #44546a;
    border: 1px solid #44546a;
  }
  @media screen and (max-width: 1250px) {
    width: 0.75vw;
    height: 0.5vh;
  }
  @media screen and (max-width: 900px) {
    width: 0.7vw;
    height: 0.65vh;
    // width: 0.98vw;
    // height: 0.98vw;
  }
  @media screen and (max-width: 750px) {
    width: 0.95vw;
    height: 1vw;
    border: none !important;
  }
  @media screen and (max-width: 450px) {
    width: 0.98vw;
  }
`

export const Cube = (props: CubePropsType) => {
  return <Container {...props} />
}
