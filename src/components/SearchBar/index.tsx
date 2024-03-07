import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Input, SearchIcon } from './styles'

export function SearchBar() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function handleSearch() {
    if (search) {
      navigate(`?search-query=${search}`)
    }
  }

  function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Container>
      <Input
        type="text"
        placeholder="Buscar filme pelo nome"
        value={search}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <SearchIcon search={search.toString()} onClick={handleSearch} />
    </Container>
  )
}
