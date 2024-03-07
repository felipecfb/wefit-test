import { convertToBRL } from '@/utils/convertToBRL'

import {
  Button,
  CartIcon,
  CartQuantityWrapper,
  Container,
  Image,
  Price,
  Title,
} from './styles'

export type MovieCard = {
  id: number
  title: string
  price: number
  image: string
}

interface MovieCardProps {
  movie: MovieCard
  quantity: number
  addProductToCart: (product: MovieCard) => void
  active: boolean
}

export function MovieCard({
  movie,
  quantity,
  addProductToCart,
  active,
}: MovieCardProps) {
  return (
    <Container>
      <Image src={movie.image} alt="Movie" />
      <Title>{movie.title}</Title>
      <Price>{convertToBRL(movie.price)}</Price>
      <Button onClick={() => addProductToCart(movie)} active={active}>
        <CartQuantityWrapper>
          <CartIcon src="cart-button.svg" alt="Carrinho de compras" />
          {quantity}
        </CartQuantityWrapper>
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
