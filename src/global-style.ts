import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #2F2E41;
    --primary-text: #333333;
    --secondary-text: #999999;
    --button: #009EDD;
    --button-active: #039B00;
    --white: #ffffff;
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
    background: var(--background);
    color: var(--primary-text);
  }

  body, input, select, textarea, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
