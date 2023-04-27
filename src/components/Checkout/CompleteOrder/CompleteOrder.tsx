import { useState } from 'react'
import { SmallTitle } from '@/components/SmallTitle'
import * as Styles from './CompleteOrder.styles'
import { DefaultCard } from '@/components/DefaultCard'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export default function CompleteOrder() {
  const [value, setValue] = useState('left')

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
          <Styles.DeliveryFormRow size="sm">
            <Styles.DeliveryFormInput placeholder="CEP" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput placeholder="Rua" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow size="sm">
            <Styles.DeliveryFormInput placeholder="Número" />
            <Styles.DeliveryFormInput placeholder="Complemento" />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow size="xs">
            <Styles.DeliveryFormInput placeholder="Bairro" />
            <Styles.DeliveryFormInput placeholder="Cidade" />
            <Styles.DeliveryFormInput placeholder="UF" />
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
        <ToggleGroup.Root
          type="single"
          value={value}
          onValueChange={(value: string) => {
            if (value) setValue(value)
          }}
        >
          <ToggleGroup.Item value="Cartão de Crédito">
            Cartão de Crédito
          </ToggleGroup.Item>
          <ToggleGroup.Item value="Cartão de Débito">
            Cartão de Débito
          </ToggleGroup.Item>
          <ToggleGroup.Item value="Dinheiro">Dinheiro</ToggleGroup.Item>
        </ToggleGroup.Root>
      </DefaultCard>
    </Styles.Wrapper>
  )
}
