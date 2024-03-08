import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CartProvider } from './hooks/useCart'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
