import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartDescription = styled.section`
  text-align: end;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 19.07px;
  }

  span {
    color: ${({ theme }) => theme.colors['secondary-text']};
    font-size: 14px;
    font-weight: 600;
    line-height: 16.34px;
  }
`
