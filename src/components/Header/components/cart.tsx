import { CartDescription, Container } from './styles'

export function Cart() {
  return (
    <Container href="/cart">
      <CartDescription>
        <p>Meu carrinho</p>
        <span>0 itens</span>
      </CartDescription>

      <img src="cart.svg" alt="Ícone do carrinho" />
    </Container>
  )
}
