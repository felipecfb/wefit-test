import { Helmet } from 'react-helmet-async'

import { useCart } from '@/hooks/useCart'

import { CartContent } from './components/CartContent'
import { EmptyCart } from './components/EmptyCart'

export function Cart() {
  const { cart } = useCart()

  return (
    <>
      <Helmet title="Cart" />
      {cart.length > 0 ? <CartContent /> : <EmptyCart />}
    </>
  )
}
