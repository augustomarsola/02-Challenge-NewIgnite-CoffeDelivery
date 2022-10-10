import { ShoppingCart } from 'phosphor-react'
import { coffees } from './coffees'
import {
  CartButton,
  CoffeeDescription,
  CoffeeTags,
  Container,
  ProductCartControl,
  ProductContainer,
  ProductContent,
  ProductTitle,
} from './styles'

export function Products() {
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
              <p>
                <span>R$</span>
                {coffee.price}
              </p>
              <div>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <CartButton>
                  <ShoppingCart weight="fill" />
                </CartButton>
              </div>
            </ProductCartControl>
          </ProductContent>
        ))}
      </ProductContainer>
    </Container>
  )
}
