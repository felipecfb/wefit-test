import { useCart } from '@/hooks/useCart'

import { CartItem } from '../CartItem'
import {
  Button,
  CartBody,
  CartContentContainer,
  CartFooter,
  CartHeader,
  Divider,
  Total,
} from './styles'

export function CartContent() {
  const { cart } = useCart()

  return (
    <CartContentContainer>
      <CartHeader>
        <p>Produto</p>
        <p>Qtd</p>
        <p>Subtotal</p>
        <img src="trash.svg" alt="" />
      </CartHeader>

      <CartBody>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            quantity={product.quantity}
          />
        ))}
      </CartBody>

      <Divider />

      <CartFooter>
        <Button>Finalizar pedido</Button>

        <Total>
          <span>Total</span>
          <p>R$ 29,90</p>
        </Total>
      </CartFooter>
    </CartContentContainer>
  )
}
