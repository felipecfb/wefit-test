import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 0fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartItemContainerMobile = styled.div`
  display: none;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 91px;

  @media screen and (max-width: 768px) {
    width: 64px;
  }
`

export const InformationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 19.07px;
  }
`

export const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;
  text-align: end;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: flex-start;
`

export const MinusIcon = styled.img`
  cursor: pointer;
`

export const Quantity = styled.input`
  padding: 3.5px 0;
  width: 62px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.background};
  line-height: 19.07px;
  font-weight: 400;

  border: 1px solid #d9d9d9;
  border-radius: 4px;

  text-align: center;
`

export const PlusIcon = styled.img`
  cursor: pointer;
`

export const Subtotal = styled.p`
  color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: 700;
  line-height: 21.79px;

  span {
    display: none;

    font-size: 12px;
    color: ${({ theme }) => theme.colors['secondary-text']};
    font-weight: 700;
    line-height: 16.34px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    span {
      display: block;
    }
  }
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  max-width: max-content;
`

export const MobileContainer = styled.section`
  display: none;
  gap: 16px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const InformationsWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TopWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const BottomWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`
