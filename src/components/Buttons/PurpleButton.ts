import { styled } from '@/styles'

export const PurpleButton = styled('button', {
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
