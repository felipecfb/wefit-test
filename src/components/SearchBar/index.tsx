import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container, Input, SearchIcon } from './styles'

export function SearchBar() {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  // Navegar para a rota com a query de busca ao clicar no ícone de pesquisa
  function handleSearch() {
    if (search) {
      navigate(`?search-query=${search}`)
    }
  }

  // Pesquisar quando o usuário apertar a tecla Enter
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
