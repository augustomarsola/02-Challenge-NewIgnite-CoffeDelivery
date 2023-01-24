import { ActionTypes } from './enums'

function increaseCoffee(id: number) {
  return {
    type: ActionTypes.INCREASE_COFFEE,
    payload: id,
  }
}

function decreaseCoffee(id: number) {
  return {
    type: ActionTypes.DECREASE_COFFEE,
    payload: id,
  }
}

export const coffeesActions = {
  increase: increaseCoffee,
  decrease: decreaseCoffee,
}
