import { atomWithStorage } from 'jotai/utils'

export interface CartAtomProps {
  id: number
  quantity: number
}

export const cartAtom = atomWithStorage<CartAtomProps[]>(
  '@coffeeDeliveryCart',
  []
)
