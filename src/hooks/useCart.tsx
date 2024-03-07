import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { MovieCard } from '@/pages/Home/components/MovieCard'

const WeMoviesLocalStorageKey = '@WeMovies:cart'

interface Cart extends MovieCard {
  quantity: number
}

interface CartContextData {
  cart: Cart[]
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])

  // Recuperar os dados do carrinho no localStorage
  useEffect(() => {
    const storagedCart = localStorage.getItem(WeMoviesLocalStorageKey)

    if (storagedCart) {
      setCart(JSON.parse(storagedCart))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  return context
}
