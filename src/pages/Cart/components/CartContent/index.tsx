import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const {
    cart,
    deleteProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart,
  } = useCart()

  function handleDeleteProductFromCart(productId: number) {
    deleteProductFromCart(productId)
  }

  function handleIncrementProductQuantity(productId: number) {
    incrementProductQuantity(productId)
  }

  function handleDecrementProductQuantity(productId: number) {
    decrementProductQuantity(productId)
  }

  function handleFinishOrder() {
    navigate('/order-success')

    clearCart()
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
            incrementProductQuantity={() =>
              handleIncrementProductQuantity(product.id)
            }
            decrementProductQuantity={() =>
              handleDecrementProductQuantity(product.id)
            }
          />
        ))}
      </CartBody>

      <Divider />

      <CartFooter>
        <Button onClick={handleFinishOrder}>Finalizar pedido</Button>

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
