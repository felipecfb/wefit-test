import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media screen and (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors['primary-text']};
  }

  body, input, select, textarea, button {
    font: 400 1rem "Open Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
