import { Search } from 'lucide-react'
import styled from 'styled-components'

interface SearchIconProps {
  hasSearchText: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};

  border: 2px solid transparent;

  &:focus-within {
    border: 2px solid #009edd;
  }
`

export const Input = styled.input`
  width: 100%;

  font-size: 1rem;
  font-weight: 400;
  line-height: 21.79px;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.background};

  &::placeholder {
    color: #c0c0c0;
  }

  &:focus-visible {
    outline: none;
  }
`

export const SearchIcon = styled(Search)<SearchIconProps>`
  color: ${({ hasSearchText, theme }) =>
    hasSearchText ? theme.colors.background : '#cccccc'};
  cursor: pointer;
`
