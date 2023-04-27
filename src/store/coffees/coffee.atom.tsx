import { coffees } from './coffeesList'
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
    const coffeesIncreased = coffees.map((current) => {
      if (current.id === id) {
        return {
          ...current,
          quantity: ++current.quantity,
        }
      }
      return current
    })
    setCoffees(coffeesIncreased)
  }

  function decreaseCoffee(id: number) {
    const coffeesDecreased = coffees.map((current) => {
      if (current.id === id && current.quantity > 1) {
        return {
          ...current,
          quantity: --current.quantity,
        }
      }
      return current
    })

    setCoffees(coffeesDecreased)
  }

  function filteredCoffee(id: number) {
    return coffees.find((coffee) => coffee.id === id)
  }

  return {
    coffees,
    increaseCoffee,
    decreaseCoffee,
    filteredCoffee,
  }
}
