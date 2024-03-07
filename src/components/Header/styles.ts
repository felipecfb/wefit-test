import styled from 'styled-components'

export const Container = styled.header`
  margin: 0 180px;

  padding: 24px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
`
