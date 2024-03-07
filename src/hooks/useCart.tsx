import { createContext, ReactNode, useContext, useState } from 'react'

import { MovieCard } from '@/pages/Home/components/MovieCard'

import { useLocalStorage } from './useLocalStorage'

const WeMoviesLocalStorageKey = '@WeMovies:cart'

interface Cart extends MovieCard {
  quantity: number
}

interface CartContextData {
  cart: Cart[]
  addProductToCart: (product: MovieCard) => void
  deleteProductFromCart: (productId: number) => void
  incrementProductQuantity: (productId: number) => void
  decrementProductQuantity: (productId: number) => void
  clearCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const { setLocalStorage, getLocalStorage } = useLocalStorage()

  const [cart, setCart] = useState<Cart[]>(() => {
    const storagedCart = getLocalStorage()

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })

  function addProductToCart(product: MovieCard) {
    const productAlreadyInCart = cart.find(
      (cartProduct) => cartProduct.id === product.id,
    )

    if (productAlreadyInCart) {
      setCart(
        cart.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + 1,
              }
            : cartProduct,
        ),
      )

      setLocalStorage(
        cart.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + 1,
              }
            : cartProduct,
        ),
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])

      localStorage.setItem(
        WeMoviesLocalStorageKey,
        JSON.stringify([...cart, { ...product, quantity: 1 }]),
      )
    }
  }

  function deleteProductFromCart(productId: number) {
    const newCart = cart.filter((product) => product.id !== productId)

    setCart(newCart)

    setLocalStorage(newCart)
  }

  function incrementProductQuantity(productId: number) {
    const newCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    )

    setCart(newCart)

    setLocalStorage(newCart)
  }

  function decrementProductQuantity(productId: number) {
    if (cart.find((product) => product.id === productId)?.quantity === 1) {
      return
    }

    const newCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    )

    setCart(newCart)

    setLocalStorage(newCart)
  }

  function clearCart() {
    setCart([])
    localStorage.removeItem(WeMoviesLocalStorageKey)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        deleteProductFromCart,
        incrementProductQuantity,
        decrementProductQuantity,
        clearCart,
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
