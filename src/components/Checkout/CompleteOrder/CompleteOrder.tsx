import { SmallTitle } from '@/components/SmallTitle'
import * as Styles from './CompleteOrder.styles'
import { DefaultCard } from '@/components/DefaultCard'

export default function CompleteOrder() {
  return (
    <Styles.Wrapper>
      <SmallTitle>Complete seu pedido</SmallTitle>
      <DefaultCard>
        <Styles.DeliveryWrapper>
          <Styles.DeliveryIcon />
          <Styles.DeliveryText>
            <Styles.DeliveryTitle>Endereço de Entrega</Styles.DeliveryTitle>
            <Styles.DeliveryDescription>
              Informe o endereço onde deseja receber seu pedido
            </Styles.DeliveryDescription>
          </Styles.DeliveryText>
        </Styles.DeliveryWrapper>
      </DefaultCard>
      <DefaultCard>
        <p>Pagamentos</p>
      </DefaultCard>
    </Styles.Wrapper>
  )
}
