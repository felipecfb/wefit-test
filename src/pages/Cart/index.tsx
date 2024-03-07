import { useState } from 'react'

import { CartContent } from './components/CartContent'
import { EmptyCart } from './components/EmptyCart'
import { Container } from './styles'

export function Cart() {
  const [cart, setCart] = useState(true)

  return <Container>{cart ? <CartContent /> : <EmptyCart />}</Container>
}
