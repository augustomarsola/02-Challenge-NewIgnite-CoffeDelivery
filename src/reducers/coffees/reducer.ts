import { InitialCoffeesProps } from '@/atoms/CoffeeAtom'
import { ActionTypes } from './enums'

interface ActionProps {
  type: string
  payload: number
}

export function coffeeReducer(state: InitialCoffeesProps, action: ActionProps) {
  switch (action.type) {
    case ActionTypes.INCREASE_COFFEE: {
      return state.map((current) => {
        if (current.id === action.payload) {
          return {
            ...current,
            quantity: ++current.quantity,
          }
        }
        return current
      })
    }
    case ActionTypes.DECREASE_COFFEE: {
      return state.map((current) => {
        if (current.id === action.payload && current.quantity > 1) {
          return {
            ...current,
            quantity: --current.quantity,
          }
        }
        return current
      })
    }
    default: {
      return state
    }
  }
}
