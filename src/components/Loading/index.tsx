import { Container, LoadSpinner } from './styles'

export function Loading() {
  return (
    <Container>
      <LoadSpinner src="load-spinner.png" alt="Carregando o conteúdo" />
    </Container>
  )
}
