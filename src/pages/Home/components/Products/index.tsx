import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { coffees } from './coffees'
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
                {coffee.price}
              </ProductPrice>
              <ProductOptionsContent>
                <ProductControl>
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
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
