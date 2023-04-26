import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export interface CartAtomProps {
  id: number
  quantity: number
}

const cartAtom = atomWithStorage<CartAtomProps[]>('@coffeeDeliveryCart', [])

export default function useCart() {
  const [cart, setCart] = useAtom(cartAtom)

  const addCoffeeToCart = (product: CartAtomProps) => {
    const coffeeId = product.id
    const coffeeQtd = product.quantity
    const coffeeAddedIndex = cart.findIndex((coffee) => coffee.id === coffeeId)

    if (coffeeAddedIndex >= 0) {
      const newCoffeeArray = cart.slice(0)
      newCoffeeArray[coffeeAddedIndex].quantity =
        newCoffeeArray[coffeeAddedIndex].quantity + coffeeQtd
      setCart(newCoffeeArray)
    } else {
      setCart([
        ...cart,
        {
          id: coffeeId,
          quantity: coffeeQtd,
        },
      ])
    }
  }

  const cartQtd = cart.reduce((prev, current) => {
    if (current.quantity) {
      return current.quantity + prev
    }
    return prev
  }, 0)

  return {
    cart,
    cartQtd,
    addCoffeeToCart,
  }
}
