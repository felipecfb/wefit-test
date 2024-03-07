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
}

export function MovieCard({
  movie,
  quantity,
  addProductToCart,
}: MovieCardProps) {
  return (
    <Container>
      <Image src={movie.image} alt="Movie" />
      <Title>{movie.title}</Title>
      <Price>{convertToBRL(movie.price)}</Price>
      <Button onClick={() => addProductToCart(movie)}>
        <CartQuantityWrapper>
          <CartIcon src="cart-button.svg" alt="Carrinho de compras" />
          {quantity}
        </CartQuantityWrapper>
        Adicionar ao carrinho
      </Button>
    </Container>
  )
}
