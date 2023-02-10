import { DefaultCard } from '@/components/DefaultCard'
import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const SelectedCoffeeCard = styled(DefaultCard, {
  borderTopRightRadius: 44,
})
