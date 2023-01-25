import { CartAtomProps } from '@/atoms/CartAtom'
import { ActionTypes } from './enums'

interface ActionProps {
  type: string
  payload: CartAtomProps
}

export function cartReducer(state: CartAtomProps, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return 2
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return 4
    }
    default: {
      return state
    }
  }
}
