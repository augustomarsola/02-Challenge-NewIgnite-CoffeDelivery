import { SmallTitle } from '@/components/SmallTitle'
import { routesNames } from '@/routes/routesNames'
import * as Styles from './SelectedCoffee.styles'
import { useCart } from '@/store/cart'
import { priceConvert } from '@/utils/priceConvert'
import { CoffeeItem } from '../CoffeeItem'

export default function SelectedCoffee() {
  const { cart, cartTotal } = useCart()
  const portage = 3.5
  const totalPrice = cartTotal + portage

  return (
    <Styles.Wrapper>
      <SmallTitle>Cafés Selecionados</SmallTitle>
      <Styles.SelectedCoffeeCard>
        {cart.map((coffee) => (
          <CoffeeItem
            coffeeQtd={coffee.quantity}
            id={coffee.id}
            key={coffee.id}
          />
        ))}
        <div>Lista de Cafés</div>
        <Styles.ResumeContent>
          <Styles.ResumeRow>
            <span>Total de itens</span>
            <span>{priceConvert(cartTotal, true)}</span>
          </Styles.ResumeRow>
          <Styles.ResumeRow>
            <span>Entrega</span>
            <span>{priceConvert(portage, true)}</span>
          </Styles.ResumeRow>
          <Styles.ResumeRow resumeTotal>
            <span>Total de itens</span>
            <span>{priceConvert(totalPrice, true)}</span>
          </Styles.ResumeRow>
        </Styles.ResumeContent>
        <Styles.ConfirmOrderButton to={routesNames.confirmed} relative="path">
          Confirmar Pedido
        </Styles.ConfirmOrderButton>
      </Styles.SelectedCoffeeCard>
    </Styles.Wrapper>
  )
}
