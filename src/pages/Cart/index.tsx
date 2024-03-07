import { useCart } from '@/hooks/useCart'

import { CartContent } from './components/CartContent'
import { EmptyCart } from './components/EmptyCart'
import { Container } from './styles'

export function Cart() {
  const { cart } = useCart()

  return <Container>{cart ? <CartContent /> : <EmptyCart />}</Container>
}
