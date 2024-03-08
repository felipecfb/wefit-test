import { Link } from 'react-router-dom'

import { Cart } from './components/cart'
import { Container, Logo } from './styles'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo>WeMovies</Logo>
      </Link>

      <Cart />
    </Container>
  )
}
