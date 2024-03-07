import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 180px;
  padding: 0 16px 40px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    margin: 0;
    gap: 1rem;
  }
`

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  row-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
