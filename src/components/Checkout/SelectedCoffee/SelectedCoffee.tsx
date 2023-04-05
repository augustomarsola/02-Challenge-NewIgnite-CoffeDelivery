import { SmallTitle } from '@/components/SmallTitle'
import { routesNames } from '@/routes/routesNames'
import * as Styles from './SelectedCoffee.styles'

export default function SelectedCoffee() {
  return (
    <Styles.Wrapper>
      <SmallTitle>Café Selecionado</SmallTitle>
      <Styles.SelectedCoffeeCard>
        <div>Lista de Cafés</div>
        <div>resumo pedido</div>
        <Styles.ConfirmOrderButton to={routesNames.confirmed} relative="path">
          Wrapper botão
        </Styles.ConfirmOrderButton>
      </Styles.SelectedCoffeeCard>
    </Styles.Wrapper>
  )
}
