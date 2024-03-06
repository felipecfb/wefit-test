import { Helmet } from 'react-helmet-async'

import { SearchBar } from '@/components/SearchBar'

import { Container } from './styles'

export function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Container>
        <SearchBar />
      </Container>
    </>
  )
}
