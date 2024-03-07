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

      <Image src="order-success.svg" alt="" />
      <ImageMobile src="order-success-mobile.svg" alt="" />

      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </OrderSuccessContainer>
  )
}
