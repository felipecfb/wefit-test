import styled from 'styled-components'

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

export const Button = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button};
  padding: 11px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 16.34px;

  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
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
