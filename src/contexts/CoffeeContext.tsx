import { createContext, ReactNode } from 'react'
import { coffees } from './coffees'

interface CoffeeContextType {
  id: string
  name: string
  description: string
  price: number
  tags: string[]
  imgUrl: string
}

export const CoffeeContext = createContext<CoffeeContextType[]>([])

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  return (
    <CoffeeContext.Provider value={coffees}>{children}</CoffeeContext.Provider>
  )
}
