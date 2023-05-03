import * as Toast from '@radix-ui/react-toast'
import { styled } from '@/styles'
import { ToastRoot as MainRoot } from '../ToastProvider/ToastProvider.styles'

export const ToastRoot = styled(MainRoot, {
  background: '$red500',
  color: '$white',
})

export const ContentWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$header',
  fontSize: '1.25rem',
})
