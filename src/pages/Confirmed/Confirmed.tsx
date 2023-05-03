import motorbikeMan from '@/assets/motorbike-man.svg'
import * as Styles from './Confirmed.styles'

export default function Confirmed() {
  return (
    <Styles.Wrapper>
      <Styles.TextContent>
        <Styles.TitleContent>
          <Styles.ConfirmedTitle>Uhu! Pedido confirmado</Styles.ConfirmedTitle>
          <Styles.ConfirmedSubTitle>
            Agora é só aguardar que logo o café chegará até você
          </Styles.ConfirmedSubTitle>
        </Styles.TitleContent>
        <Styles.FormInfoContent>Info</Styles.FormInfoContent>
      </Styles.TextContent>
      <Styles.ConfirmedImg
        src={motorbikeMan}
        alt="Um homem saíndo em uma moto para entrega de cafés"
      />
    </Styles.Wrapper>
  )
}
