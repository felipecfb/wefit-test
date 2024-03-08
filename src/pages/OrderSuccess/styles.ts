import styled from 'styled-components'

import { DefaultButton } from '@/components/Button/styles'

export const OrderSuccessContainer = styled.div`
  padding: 64px 300.5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 4px;

  @media screen and (max-width: 768px) {
    padding: 64px;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  text-align: center;
`

export const Image = styled.img`
  width: 100%;
  max-width: 447px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ImageMobile = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 178.63px;
  }
`

export const Button = styled(DefaultButton)`
  width: 173px;
  text-transform: uppercase;
`
