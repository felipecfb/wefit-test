import styled from 'styled-components'

import { DefaultButton } from '@/components/Button/styles'

interface ButtonProps {
  active: boolean
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const Image = styled.img``

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
`

export const Button = styled(DefaultButton)<ButtonProps>`
  gap: 12px;

  background-color: ${({ active, theme }) =>
    active ? theme.colors['button-active'] : theme.colors.button};
`

export const CartQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.4px;

  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
`

export const CartIcon = styled.img``
