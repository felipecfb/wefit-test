import { Link } from 'react-router-dom'

import {
  Button,
  Image,
  ImageMobile,
  OrderSuccessContainer,
  Title,
} from './styles'

export function OrderSuccess() {
  return (
    <OrderSuccessContainer>
      <Title>Compra realizada com sucesso!</Title>

      <Image
        src="order-success.svg"
        alt="Imagem que representar o sucesso do pedido"
      />
      <ImageMobile
        src="order-success-mobile.svg"
        alt="Imagem que representar o sucesso do pedido"
      />

      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </OrderSuccessContainer>
  )
}
