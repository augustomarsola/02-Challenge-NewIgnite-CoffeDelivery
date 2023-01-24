import { atomWithStorage } from 'jotai/utils'

const initalCart = {}

export const cartAtom = atomWithStorage('@coffeeDeliveryCart', [{ qtd: 0 }])
