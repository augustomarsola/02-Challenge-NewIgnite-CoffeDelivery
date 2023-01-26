import { CartAtomProps } from './cart.atom'
import { CartActionTypes } from './cart.enums'

interface ActionProps {
  type: string
  payload: CartAtomProps
}

export function cartReducer(state: CartAtomProps[], action: ActionProps) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const coffeeId = action.payload.id
      const coffeeQtd = action.payload.quantity
      const coffeeAddedIndex = state.findIndex(
        (coffee) => coffee.id === coffeeId
      )

      if (coffeeAddedIndex >= 0) {
        const newCoffeeArray = state.slice(0)
        newCoffeeArray[coffeeAddedIndex].quantity =
          newCoffeeArray[coffeeAddedIndex].quantity + coffeeQtd
        return newCoffeeArray
      }

      return [
        ...state,
        {
          id: coffeeId,
          quantity: coffeeQtd,
        },
      ]
    }
    // case CartActionTypes.REMOVE_FROM_CART: {
    //   return 4
    // }
    default: {
      return state
    }
  }
}
