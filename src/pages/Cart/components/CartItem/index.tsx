import {
  CartItemContainer,
  DeleteButton,
  Image,
  InformationsWrapper,
  Price,
  ProductWrapper,
  QuantityWrapper,
  Subtotal,
  Title,
} from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <ProductWrapper>
        <Image src="https://via.placeholder.com/300" alt="Movie" />
        <InformationsWrapper>
          <Title>Viúva Negra</Title>
          <Price>R$ 9,99</Price>
        </InformationsWrapper>
      </ProductWrapper>

      <QuantityWrapper></QuantityWrapper>

      <Subtotal>R$ 29,99</Subtotal>

      <DeleteButton>
        <img src="trash.svg" alt="" />
      </DeleteButton>
    </CartItemContainer>
  )
}
