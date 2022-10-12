import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  imgUrl: string
}

export function coffeeReducer(state: any, action: any) {
  switch (action.type) {
    case ActionTypes.INCREASE_COFFEE:
  }
}
