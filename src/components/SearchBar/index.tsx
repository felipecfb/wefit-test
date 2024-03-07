import { ChangeEvent, useState } from 'react'

import { Container, Input, SearchIcon } from './styles'

export function SearchBar() {
  const [search, setSearch] = useState('')

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar filme pelo nome"
        value={search}
        onChange={handleSearch}
      />
      <SearchIcon search={search.toString()} />
    </Container>
  )
}
