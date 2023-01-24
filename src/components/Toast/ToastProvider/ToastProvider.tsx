import * as Toast from '@radix-ui/react-toast'
import { ReactNode } from 'react'
import { ToastViewport } from './ToastProvider.styles'

interface ToastProvider {
  children: ReactNode
}

export default function ToastProvider({ children }: ToastProvider) {
  return (
    <Toast.Provider label="Notificação">
      {children}
      <ToastViewport label="Notificação ({hotkey})" />
    </Toast.Provider>
  )
}
