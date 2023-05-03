import motorbikeMan from '@/assets/motorbike-man.svg'
import * as Styles from './Confirmed.styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCoffeeForm } from '@/store/form'

export default function Confirmed() {
  const { completedFormValues } = useCoffeeForm()
  return (
    <Styles.Wrapper>
      <Styles.TextContent>
        <Styles.TitleContent>
          <Styles.ConfirmedTitle>Uhu! Pedido confirmado</Styles.ConfirmedTitle>
          <Styles.ConfirmedSubTitle>
            Agora é só aguardar que logo o café chegará até você
          </Styles.ConfirmedSubTitle>
        </Styles.TitleContent>
        <Styles.FormInfoContent>
          <Styles.FinalInfosContent>
            <Styles.FinalInfoIcon>
              <MapPin weight="fill" />
            </Styles.FinalInfoIcon>
            <Styles.FinalInfoText>
              <p>
                Entrega em{' '}
                <strong>{`${completedFormValues.address}, ${completedFormValues.number}`}</strong>
              </p>
              <p>{`${completedFormValues.district} - ${completedFormValues.city}, ${completedFormValues.uf}`}</p>
            </Styles.FinalInfoText>
          </Styles.FinalInfosContent>
          <Styles.FinalInfosContent>
            <Styles.FinalInfoIcon color="yellow">
              <Timer weight="fill" />
            </Styles.FinalInfoIcon>
            <Styles.FinalInfoText>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </Styles.FinalInfoText>
          </Styles.FinalInfosContent>
          <Styles.FinalInfosContent>
            <Styles.FinalInfoIcon color="brown">
              <CurrencyDollar />
            </Styles.FinalInfoIcon>
            <Styles.FinalInfoText>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{completedFormValues.paymentMethod}</strong>
              </p>
            </Styles.FinalInfoText>
          </Styles.FinalInfosContent>
        </Styles.FormInfoContent>
      </Styles.TextContent>
      <Styles.ConfirmedImg
        src={motorbikeMan}
        alt="Um homem saindo em uma moto para entrega de cafés"
      />
    </Styles.Wrapper>
  )
}
