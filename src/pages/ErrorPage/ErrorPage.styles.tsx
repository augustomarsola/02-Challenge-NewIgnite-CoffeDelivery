import { PurpleButton } from '@/components/Buttons/PurpleButton'
import { styled } from '@/styles'

export const ErrorWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ErrorText = styled('strong', {
  fontSize: '1.5rem',
})

export const ErrorButton = styled(PurpleButton, {
  fontSize: '1.25rem',
  display: 'flex',
  gap: 4,
  borderColor: '$purple500',

  '&:hover': {
    borderColor: '$purple500',
  },
})
