import { styled } from '@/styles'
import { MapPinLine } from 'phosphor-react'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const DeliveryWrapper = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const DeliveryText = styled('div')

export const DeliveryTitle = styled('p', {
  fontSize: '1rem',
  color: '$subtitleColor',
})

export const DeliveryDescription = styled('p', {
  fontSize: '0.875rem',
  color: '$textColor',
})

export const DeliveryIcon = styled(MapPinLine, {
  color: '$yellow900',
  height: '1.375rem',
  width: '1.375rem',
})
