import { createContext, ReactNode, useContext, useState } from 'react'

import { MovieCard } from '@/pages/Home/components/MovieCard'

export const WeMoviesLocalStorageKey = '@WeMovies:cart'

interface Cart extends MovieCard {
  quantity: number
}

interface LocalStorageContextData {
  cart: Cart[]
  setCart: (cart: Cart[]) => void
}

interface LocalStorageProviderProps {
  children: ReactNode
}

const LocalStorageContext = createContext({} as LocalStorageContextData)

export function LocalStorageProvider({ children }: LocalStorageProviderProps) {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storagedCart = localStorage.getItem(WeMoviesLocalStorageKey)

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  return (
    <LocalStorageContext.Provider value={{ cart, setCart }}>
      {children}
    </LocalStorageContext.Provider>
  )
}

export function useLocalStorage() {
  const context = useContext(LocalStorageContext)

  return context
}
