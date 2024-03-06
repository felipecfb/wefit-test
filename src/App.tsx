import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | WeMovies" />
        <RouterProvider router={router} />
      </HelmetProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
