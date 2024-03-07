import { useCart } from '@/hooks/useCart'

import { CartDescription, Container } from './styles'

export function Cart() {
  const { cart } = useCart()

  const cartQuantity = cart.reduce((acc, product) => acc + product.quantity, 0)

  return (
    <Container href="/cart">
      <CartDescription>
        <p>Meu carrinho</p>
        <span>
          {cart ? cartQuantity : 0} {cartQuantity > 0 ? 'itens' : 'item'}
        </span>
      </CartDescription>

      <img src="cart.svg" alt="Ícone do carrinho" />
    </Container>
  )
}
