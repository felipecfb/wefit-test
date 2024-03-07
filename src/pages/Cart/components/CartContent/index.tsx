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
  return (
    <CartContentContainer>
      <CartHeader>
        <p>Produto</p>
        <p>Qtd</p>
        <p>Subtotal</p>
        <p></p>
      </CartHeader>

      <CartBody>
        <CartItem />
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
