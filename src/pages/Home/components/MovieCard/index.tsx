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
  data: MovieCard[]
}

export function MovieCard({ data }: MovieCardProps) {
  return (
    <>
      {data.map((movie) => (
        <Container key={movie.id}>
          <Image src={movie.image} alt="Movie" />
          <Title>{movie.title}</Title>
          <Price>{convertToBRL(movie.price)}</Price>
          <Button>
            <CartQuantityWrapper>
              <CartIcon src="cart-button.svg" alt="Carrinho de compras" />0
            </CartQuantityWrapper>
            Adicionar ao carrinho
          </Button>
        </Container>
      ))}
    </>
  )
}
