import {
  Button,
  CartIcon,
  CartQuantityWrapper,
  Container,
  Image,
  Price,
  Title,
} from './styles'

export function MovieCard() {
  return (
    <Container>
      <Image src="https://via.placeholder.com/300" alt="Movie" />
      <Title>Viúva Negra</Title>
      <Price>R$ 9,99</Price>
      <Button>
        <CartQuantityWrapper>
          <CartIcon src="cart-button.svg" alt="Carrinho de compras" />0
        </CartQuantityWrapper>
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
