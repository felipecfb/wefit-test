import { Link } from 'react-router-dom'

import { Button, EmptyCartContainer, Image, ImageMobile, Title } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <Title>Parece que não há nada por aqui :(</Title>

      <Image
        src="empty-cart.svg"
        alt="Imagem para representar o carrinho vazio"
      />
      <ImageMobile
        src="empty-cart-mobile.svg"
        alt="Imagem para representar o carrinho vazio"
      />

      <Link to="/">
        <Button>Recarregar página</Button>
      </Link>
    </EmptyCartContainer>
  )
}
