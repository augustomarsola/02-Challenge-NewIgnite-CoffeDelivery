import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { priceConvert } from '../../../../utils/priceConvert'
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

export function Products() {
  const coffees = useContext(CoffeeContext)
  const [coffeeQtd, setCoffeeQtd] = useState(1)

  function increaseCoffee() {
    setCoffeeQtd((coffee) => ++coffee)
  }

  function decreaseCoffee() {
    setCoffeeQtd((coffee) => --coffee)
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
                  <button onClick={decreaseCoffee}>
                    <Minus />
                  </button>
                  <span>{coffeeQtd}</span>
                  <button onClick={increaseCoffee}>
                    <Plus />
                  </button>
                </ProductControl>
                <CartButton>
                  <ShoppingCart weight="fill" size={20} />
                </CartButton>
              </ProductOptionsContent>
            </ProductCartControl>
          </ProductContent>
        ))}
      </ProductContainer>
    </Container>
  )
}
