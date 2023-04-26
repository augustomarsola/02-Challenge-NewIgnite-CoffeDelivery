import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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
import { useEffect, useRef, useState } from 'react'
import { ToastAddedCoffee } from '@/components/Toast/ToastAddedCoffee'
import { useCoffee } from '@/store/coffees'
import { useCart } from '@/store/cart'

export function Products() {
  const { coffees, decreaseCoffee, increaseCoffee } = useCoffee()
  const { addCoffeeToCart } = useCart()
  const [toastAddCoffee, setToastAddCoffee] = useState(false)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function addCoffeeHandler(id: number, quantity: number) {
    setToastAddCoffee(false)
    window.clearTimeout(timerRef.current)
    addCoffeeToCart({ id, quantity })
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
                <CartButton
                  onClick={() => addCoffeeHandler(coffee.id, coffee.quantity)}
                >
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
