import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Loading } from '@/components/Loading'
import { SearchBar } from '@/components/SearchBar'
import { api } from '@/services/api'

import { MovieCard } from './components/MovieCard'
import { Container, MoviesWrapper } from './styles'

export function Home() {
  const [movies, setMovies] = useState([])
  const [contentReady, setContentReady] = useState(false)

  // Simulando um delay de 3 segundos da API para carregar os dados
  setTimeout(() => {
    setContentReady(true)
  }, 3000)

  useEffect(() => {
    api.get('/products').then((response) => {
      setMovies(response.data)
    })
  }, [])

  return (
    <>
      <Helmet title="Home" />
      {contentReady ? (
        <Container>
          <SearchBar />

          <MoviesWrapper>
            <MovieCard data={movies} />
          </MoviesWrapper>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
