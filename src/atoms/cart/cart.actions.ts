import { CartActionTypes } from './cart.enums'

function addCoffeeCart(id: number, quantity: number) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      id,
      quantity,
    },
  }
}

export const cartActions = {
  addCoffee: addCoffeeCart,
}
