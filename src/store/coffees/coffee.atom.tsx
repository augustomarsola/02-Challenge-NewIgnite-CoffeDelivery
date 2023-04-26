import { coffees } from './coffees'
import { atom, useAtom } from 'jotai'

const initialCoffees = coffees.map((coffee) => ({
  ...coffee,
  quantity: 1,
}))

export type InitialCoffeesProps = typeof initialCoffees

const coffeesAtom = atom(initialCoffees)

export default function useCoffee() {
  const [coffees, setCoffees] = useAtom(coffeesAtom)

  function increaseCoffee(id: number) {
    setCoffees((thisCoffee) =>
      thisCoffee.map((current) => {
        if (current.id === id) {
          return {
            ...current,
            quantity: ++current.quantity,
          }
        }
        return current
      })
    )
  }

  function decreaseCoffee(id: number) {
    setCoffees((thisCoffee) =>
      thisCoffee.map((current) => {
        if (current.id === id && current.quantity > 1) {
          return {
            ...current,
            quantity: --current.quantity,
          }
        }
        return current
      })
    )
  }

  return {
    coffees,
    increaseCoffee,
    decreaseCoffee,
  }
}
