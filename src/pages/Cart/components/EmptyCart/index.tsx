import { Button, EmptyCartContainer, Image, ImageMobile, Title } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <Title>Parece que não há nada por aqui :(</Title>

      <Image src="empty-cart.svg" alt="" />
      <ImageMobile src="empty-cart-mobile.svg" alt="" />

      <Button>Recarregar página</Button>
    </EmptyCartContainer>
  )
}
