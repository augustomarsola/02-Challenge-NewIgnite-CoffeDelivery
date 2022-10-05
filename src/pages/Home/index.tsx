import CoffeeBanner from '../../assets/caffeBanner.png'
import { Container, TitleContent } from './styles'

export function Home() {
  return (
    <Container>
      <div>
        <TitleContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </TitleContent>
        <div>
          <ul>
            <li>Compra simples e segura</li>
            <li>Embalagem mantém o café intacto</li>
            <li>Entrega rápida e rastreada</li>
            <li>O café chega fresquinho até você</li>
          </ul>
        </div>
      </div>
      <div>
        <img src={CoffeeBanner} alt="Copo de café com grãos de café" />
      </div>
    </Container>
  )
}
