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
        <Styles.DeliveryFormGrid>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput placeholder="CEP" size="sm" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput placeholder="Rua" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput placeholder="Número" size="sm" />
            <Styles.DeliveryFormInput placeholder="Complemento" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput placeholder="Bairro" size="sm" />
            <Styles.DeliveryFormInput placeholder="Cidade" />
            <Styles.DeliveryFormInput placeholder="UF" size="xs" />
          </Styles.DeliveryFormRow>
        </Styles.DeliveryFormGrid>
      </DefaultCard>
      <DefaultCard>
        <Styles.DeliveryWrapper>
          <Styles.CashIcon />
          <Styles.DeliveryText>
            <Styles.DeliveryTitle>Pagamentos</Styles.DeliveryTitle>
            <Styles.DeliveryDescription>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Styles.DeliveryDescription>
          </Styles.DeliveryText>
        </Styles.DeliveryWrapper>
      </DefaultCard>
    </Styles.Wrapper>
  )
}
