import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Loading } from '@/components/Loading'
import { SearchBar } from '@/components/SearchBar'

import { Container } from './styles'

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
        </Container>
      ) : (
        <Loading />
      )}
    </>
  )
}
