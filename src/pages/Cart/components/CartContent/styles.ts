import styled from 'styled-components'

import { DefaultButton } from '@/components/Button/styles'

export const CartContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 16px;
    gap: 21px;
  }
`

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0fr;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors['secondary-text']};
    font-weight: 700;
    line-height: 19.07px;
    text-transform: uppercase;
  }

  img {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartBody = styled.div``

export const Divider = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['secondary-text']};
  height: 1px;
`
export const CartFooter = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`

export const Button = styled(DefaultButton)`
  width: 173px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors['secondary-text']};
    font-weight: 700;
    line-height: 19.07px;
    text-transform: uppercase;
  }

  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.background};
    font-weight: 700;
    line-height: 32.68px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`
