import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useReducerAtom } from 'jotai/utils'
import { coffeesAtom } from '@/atoms/CoffeeAtom'
import { priceConvert } from '@/utils/priceConvert'
import {
  CartButton,
  CoffeeDescription,
  CoffeeTags,
  Container,
  ProductCartControl,
  ProductContainer,
  ProductContent,
  ProductControl,
  ProductOptionsContent,
  ProductPrice,
  ProductTitle,
} from './styles'
import { coffeeReducer } from '@/reducers/coffees/reducer'
import { coffeesActions } from '@/reducers/coffees/actions'
import { useEffect, useRef, useState } from 'react'
import { ToastAddedCoffee } from '@/components/Toast/ToastAddedCoffee'

export function Products() {
  const [coffees, dispatchCoffeeQtd] = useReducerAtom(
    coffeesAtom,
    coffeeReducer
  )
  const [toastAddCoffee, setToastAddCoffee] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function increaseCoffee(id: number) {
    dispatchCoffeeQtd(coffeesActions.increase(id))
  }

  function decreaseCoffee(id: number) {
    dispatchCoffeeQtd(coffeesActions.decrease(id))
  }

  function addCoffee() {
    setToastAddCoffee(false)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setToastAddCoffee(true)
    }, 100)
  }

  return (
    <Container>
      <ProductTitle>Nossos cafés</ProductTitle>
      <ProductContainer>
        {coffees.map((coffee) => (
          <ProductContent key={coffee.id}>
            <img src={coffee.imgUrl} alt={coffee.description} />
            <CoffeeTags>
              {coffee.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </CoffeeTags>
            <h4>{coffee.name}</h4>
            <CoffeeDescription>{coffee.description}</CoffeeDescription>
            <ProductCartControl>
              <ProductPrice>
                <span>R$</span>
                {priceConvert(coffee.price)}
              </ProductPrice>
              <ProductOptionsContent>
                <ProductControl>
                  <button onClick={() => decreaseCoffee(coffee.id)}>
                    <Minus />
                  </button>
                  <span>{coffee.quantity}</span>
                  <button onClick={() => increaseCoffee(coffee.id)}>
                    <Plus />
                  </button>
                </ProductControl>
                <CartButton onClick={addCoffee}>
                  <ShoppingCart weight="fill" size={20} />
                </CartButton>
              </ProductOptionsContent>
            </ProductCartControl>
          </ProductContent>
        ))}
      </ProductContainer>
      <ToastAddedCoffee open={toastAddCoffee} setOpen={setToastAddCoffee} />
    </Container>
  )
}
