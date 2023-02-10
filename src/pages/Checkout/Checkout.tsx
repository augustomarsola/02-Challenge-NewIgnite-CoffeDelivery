import { CompleteOrder } from '@/components/Checkout/CompleteOrder'
import * as Styles from './Checkout.styles'
import { SelectedCoffee } from '@/components/Checkout/SelectedCoffee'

export default function Checkout() {
  return (
    <Styles.Wrapper>
      <CompleteOrder />
      <SelectedCoffee />
    </Styles.Wrapper>
  )
}
