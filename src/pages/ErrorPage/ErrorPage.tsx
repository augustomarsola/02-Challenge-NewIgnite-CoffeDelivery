import { useNavigate } from 'react-router-dom'
import * as Styles from './ErrorPage.styles'
import { ArrowLeft } from 'phosphor-react'

export default function ErrorPage() {
  const navigate = useNavigate()
  function backPageHandler() {
    navigate(-1)
  }

  return (
    <Styles.ErrorWrapper>
      <Styles.ErrorText>Não encontramos a página solicitada</Styles.ErrorText>
      <Styles.ErrorButton onClick={backPageHandler}>
        <ArrowLeft weight="fill" /> Voltar
      </Styles.ErrorButton>
    </Styles.ErrorWrapper>
  )
}
