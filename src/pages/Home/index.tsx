import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Loading } from '@/components/Loading'
import { SearchBar } from '@/components/SearchBar'
import { useCart } from '@/hooks/useCart'
import { api } from '@/services/api'

import { MovieCard } from './components/MovieCard'
import { Container, MoviesWrapper } from './styles'

export function Home() {
  const { cart, addProductToCart } = useCart()
  const [movies, setMovies] = useState([])
  const [contentReady, setContentReady] = useState(false)

  // Simulando um delay de 3 segundos da API para carregar os dados
  setTimeout(() => {
    setContentReady(true)
  }, 500)

  useEffect(() => {
    api.get('/products').then((response) => {
      setMovies(response.data)
    })
  }, [])

  function handleAddProductToCart(product: MovieCard) {
    addProductToCart(product)
  }

  return (
    <>
      <Helmet title="Home" />
      {contentReady ? (
        <Container>
          <SearchBar />

          <MoviesWrapper>
            {movies.map((movie: MovieCard) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                addProductToCart={handleAddProductToCart}
                quantity={
                  cart.find((product) => product.id === movie.id)?.quantity || 0
                }
              />
            ))}
          </MoviesWrapper>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
