import { Cart } from './components/cart'
import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Logo>WeMovies</Logo>

      <Cart />
    </Container>
  )
}
