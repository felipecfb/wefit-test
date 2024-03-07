import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

import { Loading } from '@/components/Loading'
import { SearchBar } from '@/components/SearchBar'
import { useCart } from '@/hooks/useCart'
import { api } from '@/services/api'

import { MovieCard } from './components/MovieCard'
import { Container, MoviesWrapper } from './styles'

export function Home() {
  const location = useLocation()
  const searchQuery = new URLSearchParams(location.search).get('search-query')

  const { cart, addProductToCart } = useCart()
  const [movies, setMovies] = useState([])
  const [contentReady, setContentReady] = useState(false)

  // Simulando um delay de 3 segundos da API para carregar os dados
  setTimeout(() => {
    setContentReady(true)
  }, 3000)

  useEffect(() => {
    api.get('/products').then((response) => {
      if (searchQuery) {
        const filteredMovies = response.data.filter((movie: MovieCard) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setMovies(filteredMovies)
      } else {
        setMovies(response.data)
      }
    })
  }, [searchQuery])

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
