import { useState } from 'react'

import { MovieCard } from '@/pages/Home/components/MovieCard'

export const WeMoviesLocalStorageKey = '@WeMovies:cart'

type Cart = MovieCard & { quantity: number }

export const useLocalStorage = () => {
  const [storagedCart, setStoragedCart] = useState<Cart[]>([])

  const getLocalStorage = () => {
    const storagedCart = localStorage.getItem(WeMoviesLocalStorageKey)

    if (storagedCart) {
      return storagedCart
    }

    return storagedCart
  }

  const setLocalStorage = (cart: Cart[]) => {
    if (storagedCart) {
      localStorage.setItem(WeMoviesLocalStorageKey, JSON.stringify(cart))

      setStoragedCart(cart)
    }

    return storagedCart
  }

  return { setLocalStorage, getLocalStorage }
}
