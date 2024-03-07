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
  const [loading, setLoading] = useState(false)

  setTimeout(() => {
    setContentReady(true)
  }, 3000)

  useEffect(() => {
    api.get('/products').then((response) => {
      if (searchQuery) {
        setLoading(true)

        const filteredMovies = response.data.filter((movie: MovieCard) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )

        setMovies(filteredMovies)

        setTimeout(() => {
          setLoading(false)
        }, 3000)
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
          {loading ? (
            <Loading />
          ) : (
            <MoviesWrapper>
              {movies.map((movie: MovieCard) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  addProductToCart={handleAddProductToCart}
                  quantity={
                    cart.find((product) => product.id === movie.id)?.quantity ||
                    0
                  }
                  active={!!cart.find((product) => product.id === movie.id)}
                />
              ))}
            </MoviesWrapper>
          )}
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
