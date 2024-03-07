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
  addProductToCart: (product: MovieCard) => void
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

      localStorage.setItem(
        WeMoviesLocalStorageKey,
        JSON.stringify(
          cart.map((cartProduct) =>
            cartProduct.id === product.id
              ? {
                  ...cartProduct,
                  quantity: cartProduct.quantity + 1,
                }
              : cartProduct,
          ),
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

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
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
