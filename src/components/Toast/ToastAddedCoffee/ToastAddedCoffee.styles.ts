import * as Toast from '@radix-ui/react-toast'
import { styled } from '@/styles'
import { ToastRoot as MainRoot } from '../ToastProvider/ToastProvider.styles'

export const ToastRoot = styled(MainRoot, {
  background: '$purple500',
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

export const ToastButton = styled('button', {
  fontFamily: '$header',
  backgroundColor: '$purple500',
  color: '$white',
  padding: '0.25rem 0.5rem',
  borderRadius: 4,
  border: '2px solid $white',
  cursor: 'pointer',
  transition: '.2s',

  '&:hover': {
    backgroundColor: '$white',
    color: '$purple500',
  },
})
