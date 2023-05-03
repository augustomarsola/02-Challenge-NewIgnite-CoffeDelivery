import { DefaultCard } from '@/components/DefaultCard'
import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const SelectedCoffeeCard = styled(DefaultCard, {
  borderTopRightRadius: 44,
  display: 'flex',
  flexDirection: 'column',
})

export const ResumeContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const ResumeRow = styled('div', {
  color: '$textColor',
  display: 'flex',
  fontSize: '0.875rem',
  justifyContent: 'space-between',

  variants: {
    resumeTotal: {
      true: {
        color: '$subtitleColor',
        fontSize: '1.25rem',
        fontWeight: 700,
      },
    },
  },
})

export const ConfirmOrderButton = styled('button', {
  backgroundColor: '$yellow500',
  borderRadius: 6,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '.75rem',
  textTransform: 'uppercase',
  color: '$white',
  fontWeight: 700,
  fontSize: '.875rem',
  marginTop: '1.5rem',
  transition: '.3s',

  '&:hover': {
    backgroundColor: '$yellow900',
  },
})
