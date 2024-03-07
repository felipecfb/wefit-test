import { Cart } from './components/cart'
import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <a href="/">
        <Logo>WeMovies</Logo>
      </a>

      <Cart />
    </Container>
  )
}
