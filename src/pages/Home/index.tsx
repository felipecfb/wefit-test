import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Loading } from '@/components/Loading'
import { SearchBar } from '@/components/SearchBar'

import { MovieCard } from './components/MovieCard'
import { Container, MoviesWrapper } from './styles'

export function Home() {
  const [contentReady, setContentReady] = useState(false)

  setTimeout(() => {
    setContentReady(true)
  }, 3000)

  return (
    <>
      <Helmet title="Home" />
      {contentReady ? (
        <Container>
          <SearchBar />

          <MoviesWrapper>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </MoviesWrapper>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
