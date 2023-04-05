import { DefaultCard } from '@/components/DefaultCard'
import { styled } from '@/styles'
import { Link } from 'react-router-dom'

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

export const ConfirmOrderButton = styled(Link)
