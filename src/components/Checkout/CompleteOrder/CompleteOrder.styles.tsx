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

export const DeliveryFormGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '2rem',
})

export const DeliveryFormRow = styled('div', {
  display: 'flex',
  gap: '0.75rem',
})

export const DeliveryFormInput = styled('input', {
  flexGrow: 1,
  flexShrink: 0,

  variants: {
    size: {
      xs: {
        maxWidth: '10%',
      },
      sm: {
        maxWidth: '33%',
      },
    },
  },
})
