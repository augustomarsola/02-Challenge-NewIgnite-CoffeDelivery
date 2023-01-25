import * as Toast from '@radix-ui/react-toast'
import * as Styles from './ToastAddedCoffee.styles'
import { ShoppingCart } from 'phosphor-react'

interface ToastProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToastAddedCoffee({ open, setOpen }: ToastProps) {
  return (
    <Styles.ToastRoot open={open} onOpenChange={setOpen}>
      <Styles.ContentWrapper>
        <ShoppingCart weight="fill" size={28} />
        <div>
          <Styles.ToastTitle>Pedido adicionado ao carrinho</Styles.ToastTitle>
          <Toast.Action asChild altText="Finalizar Compra">
            <Styles.ToastButton>Finalizar Compra</Styles.ToastButton>
          </Toast.Action>
        </div>
      </Styles.ContentWrapper>
    </Styles.ToastRoot>
  )
}
