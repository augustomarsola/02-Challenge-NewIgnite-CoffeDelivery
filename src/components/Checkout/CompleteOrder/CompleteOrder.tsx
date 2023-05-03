import { useEffect, useRef } from 'react'
import { SmallTitle } from '@/components/SmallTitle'
import * as Styles from './CompleteOrder.styles'
import { DefaultCard } from '@/components/DefaultCard'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { useCoffeeForm } from '@/store/form'

export default function CompleteOrder() {
  const { inputs: coffeeFormInputs } = useCoffeeForm()
  const { cepValue, setCepValue } = coffeeFormInputs.cep
  const { addressValue, setAddressValue } = coffeeFormInputs.address
  const { cityValue, setCityValue } = coffeeFormInputs.city
  const { complementValue, setComplementValue } = coffeeFormInputs.complement
  const { districtValue, setDistrictValue } = coffeeFormInputs.district
  const { numberValue, setNumberValue } = coffeeFormInputs.number
  const { ufValue, setUfValue } = coffeeFormInputs.uf
  const { paymentMethodValue, setPaymentMethodValue } =
    coffeeFormInputs.paymentMethod
  const cepInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    cepInput.current?.focus()
  }, [])

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
            <Styles.DeliveryFormInput
              placeholder="CEP"
              ref={cepInput}
              value={cepValue}
              onChange={setCepValue}
            />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow>
            <Styles.DeliveryFormInput
              placeholder="Rua"
              value={addressValue}
              onChange={setAddressValue}
            />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow size="sm">
            <Styles.DeliveryFormInput
              placeholder="Número"
              value={numberValue}
              onChange={setNumberValue}
            />
            <Styles.DeliveryFormInput
              placeholder="Complemento"
              value={complementValue}
              onChange={setComplementValue}
            />
          </Styles.DeliveryFormRow>
          <Styles.DeliveryFormRow size="xs">
            <Styles.DeliveryFormInput
              placeholder="Bairro"
              value={districtValue}
              onChange={setDistrictValue}
            />
            <Styles.DeliveryFormInput
              placeholder="Cidade"
              value={cityValue}
              onChange={setCityValue}
            />
            <Styles.DeliveryFormInput
              placeholder="UF"
              value={ufValue}
              onChange={setUfValue}
            />
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
        <Styles.ToggleRoot
          type="single"
          value={paymentMethodValue}
          onValueChange={(value: string) => {
            if (value) setPaymentMethodValue(value)
          }}
        >
          <Styles.ToggleItem value="Cartão de Crédito">
            <CreditCard /> Cartão de Crédito
          </Styles.ToggleItem>
          <Styles.ToggleItem value="Cartão de Débito">
            <Bank /> Cartão de Débito
          </Styles.ToggleItem>
          <Styles.ToggleItem value="Dinheiro">
            <Money />
            Dinheiro
          </Styles.ToggleItem>
        </Styles.ToggleRoot>
      </DefaultCard>
    </Styles.Wrapper>
  )
}
