import styled from 'styled-components'

import { ThemeType } from '@/@types/styled'

interface ButtonProps {
  background?: ThemeType
}

export const DefaultButton = styled.button<ButtonProps>`
  background-color: ${({ background, theme }) =>
    background || theme.colors.button};

  width: 100%;

  padding: 11px 0;
  border-radius: 4px;
  border: none;

  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
