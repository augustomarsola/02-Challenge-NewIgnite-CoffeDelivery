import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CoffeeBanner from '@/assets/coffeeBanner.png'
import { Products } from './components/Products'
import {
  BackgroundContainer,
  Container,
  Icon,
  LeftContent,
  ListContent,
  TitleContent,
} from './Home.styles'

export default function Home() {
  return (
    <>
      <BackgroundContainer>
        <Container>
          <LeftContent>
            <TitleContent>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h2>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h2>
            </TitleContent>
            <ListContent>
              <li>
                <Icon color={'orange'}>
                  <ShoppingCart weight="fill" />
                </Icon>{' '}
                Compra simples e segura
              </li>
              <li>
                <Icon color={'dark'}>
                  <Package weight="fill" />
                </Icon>{' '}
                Embalagem mantém o café intacto
              </li>
              <li>
                <Icon color={'yellow'}>
                  <Timer weight="fill" />
                </Icon>{' '}
                Entrega rápida e rastreada
              </li>
              <li>
                <Icon color={'purple'}>
                  <Coffee weight="fill" />
                </Icon>{' '}
                O café chega fresquinho até você
              </li>
            </ListContent>
          </LeftContent>
          <div>
            <img src={CoffeeBanner} alt="Copo de café com grãos de café" />
          </div>
        </Container>
      </BackgroundContainer>
      <Products />
    </>
  )
}
