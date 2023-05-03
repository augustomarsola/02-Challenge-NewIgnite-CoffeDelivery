import * as Styles from './ToastCompleteForm.styles'
import { XCircle } from 'phosphor-react'

interface ToastProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToastCompleteForm({ open, setOpen }: ToastProps) {
  return (
    <Styles.ToastRoot open={open} onOpenChange={setOpen}>
      <Styles.ContentWrapper>
        <XCircle weight="fill" size={28} />
        <div>
          <Styles.ToastTitle>
            Preencha todos os campos do formulário
          </Styles.ToastTitle>
        </div>
      </Styles.ContentWrapper>
    </Styles.ToastRoot>
  )
}
