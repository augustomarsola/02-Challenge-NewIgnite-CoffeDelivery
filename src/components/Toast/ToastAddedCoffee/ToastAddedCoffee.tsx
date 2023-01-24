import * as Toast from '@radix-ui/react-toast'
import { ToastRoot } from '../ToastProvider/ToastProvider.styles'

interface ToastProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ToastAddedCoffee({ open, setOpen }: ToastProps) {
  return (
    <ToastRoot open={open} onOpenChange={setOpen}>
      <Toast.Title>Pedido adicionado ao carrinho</Toast.Title>
      <Toast.Action asChild altText="Finalizar Compra">
        <button>Finalizar Compra</button>
      </Toast.Action>
    </ToastRoot>
  )
}
