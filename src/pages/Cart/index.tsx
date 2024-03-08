import { useCart } from '@/hooks/useCart'

import { CartContent } from './components/CartContent'
import { EmptyCart } from './components/EmptyCart'

export function Cart() {
  const { cart } = useCart()

  return cart.length ? <CartContent /> : <EmptyCart />
}
