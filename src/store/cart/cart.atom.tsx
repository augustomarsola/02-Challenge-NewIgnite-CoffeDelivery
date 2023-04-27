import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useCoffee } from '../coffees'

export interface CartAtomProps {
  id: number
  quantity: number
}

const cartAtom = atomWithStorage<CartAtomProps[]>('@coffeeDeliveryCart', [])

export default function useCart() {
  const [cart, setCart] = useAtom(cartAtom)
  const { coffees } = useCoffee()

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

  const cartTotal = cart.reduce((prevCount, currentProd) => {
    const filteredCoffee = coffees.find(
      (coffee) => coffee.id === currentProd.id
    )
    return filteredCoffee
      ? filteredCoffee.price * currentProd.quantity + prevCount
      : prevCount
  }, 0)

  function cartRemoveOneCoffee(id: number) {
    const cartAddedCoffee = cart.map((coffee) =>
      coffee.id === id && coffee.quantity > 1
        ? {
            ...coffee,
            quantity: --coffee.quantity,
          }
        : coffee
    )
    setCart(cartAddedCoffee)
  }

  function cartAddOneCoffee(id: number) {
    const cartAddedCoffee = cart.map((coffee) =>
      coffee.id === id
        ? {
            ...coffee,
            quantity: ++coffee.quantity,
          }
        : coffee
    )
    setCart(cartAddedCoffee)
  }

  function cartRemove(id: number) {
    const filterCart = cart.filter((cart) => cart.id !== id)

    setCart(filterCart)
  }

  return {
    cart,
    cartQtd,
    cartTotal,
    addCoffeeToCart,
    cartRemoveOneCoffee,
    cartAddOneCoffee,
    cartRemove,
  }
}
