import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Image = styled.img`
  width: 91px;
`

export const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

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

export const QuantityWrapper = styled.div``

export const Subtotal = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  max-width: max-content;
`
