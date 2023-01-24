import { coffees } from './coffees'
import { atom } from 'jotai'

const initialCoffees = coffees.map((coffee) => ({
  ...coffee,
  quantity: 1,
}))

export type InitialCoffeesProps = typeof initialCoffees

export const coffeesAtom = atom(initialCoffees)
