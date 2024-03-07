import {
  CartItemContainer,
  DeleteButton,
  Image,
  InformationsWrapper,
  MinusIcon,
  PlusIcon,
  Price,
  ProductWrapper,
  Quantity,
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

      <QuantityWrapper>
        <MinusIcon />
        <Quantity type="number" value="1" />
        <PlusIcon />
      </QuantityWrapper>

      <Subtotal>R$ 29,99</Subtotal>

      <DeleteButton>
        <img src="trash.svg" alt="" />
      </DeleteButton>
    </CartItemContainer>
  )
}
