import { Link } from 'react-router-dom'

import { Button, EmptyCartContainer, Image, ImageMobile, Title } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <Title>Parece que não há nada por aqui :(</Title>

      <Image src="empty-cart.svg" alt="" />
      <ImageMobile src="empty-cart-mobile.svg" alt="" />

      <Link to="/">
        <Button>Recarregar página</Button>
      </Link>
    </EmptyCartContainer>
  )
}
