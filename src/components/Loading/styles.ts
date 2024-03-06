import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  padding-top: 40px;
`

export const LoadSpinner = styled.img`
  animation: ${rotateAnimation} 1s infinite linear;
`
