import { SmallTitle } from '@/components/SmallTitle'
import * as Styles from './SelectedCoffee.styles'

export default function SelectedCoffee() {
  return (
    <Styles.Wrapper>
      <SmallTitle>Café Selecionado</SmallTitle>
      <Styles.SelectedCoffeeCard>Aqui os cafés</Styles.SelectedCoffeeCard>
    </Styles.Wrapper>
  )
}
