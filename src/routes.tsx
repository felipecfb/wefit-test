import { createBrowserRouter } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Layout } from './pages/layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])
