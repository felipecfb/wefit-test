import { useCart } from '@/hooks/useCart'
import { convertToBRL } from '@/utils/convertToBRL'

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
  const { cart, deleteProductFromCart } = useCart()

  function handleDeleteProductFromCart(productId: number) {
    deleteProductFromCart(productId)
  }

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
            deleteProductFromCart={() =>
              handleDeleteProductFromCart(product.id)
            }
          />
        ))}
      </CartBody>

      <Divider />

      <CartFooter>
        <Button>Finalizar pedido</Button>

        <Total>
          <span>Total</span>
          <p>
            {convertToBRL(
              cart.reduce(
                (acc, product) => acc + product.price * product.quantity,
                0,
              ),
            )}
          </p>
        </Total>
      </CartFooter>
    </CartContentContainer>
  )
}
