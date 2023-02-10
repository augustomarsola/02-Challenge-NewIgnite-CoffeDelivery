import { SmallTitle } from '@/components/SmallTitle'
import * as Styles from './CompleteOrder.styles'
import { DefaultCard } from '@/components/DefaultCard'

export default function CompleteOrder() {
  return (
    <Styles.Wrapper>
      <SmallTitle>Complete seu pedido</SmallTitle>
      <DefaultCard>
        <p>Aqui</p>
      </DefaultCard>
      <DefaultCard>
        <p>Pagamentos</p>
      </DefaultCard>
    </Styles.Wrapper>
  )
}
