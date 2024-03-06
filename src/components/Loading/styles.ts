import styled, { keyframes } from 'styled-components'

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const LoadSpinner = styled.img`
  animation: ${rotateAnimation} 1s infinite linear;
`
