import { styled } from '@/styles'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

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

export const CashIcon = styled(CurrencyDollar, {
  color: '$purple900',
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
  display: 'grid',
  gap: '0.75rem',
  gridTemplateColumns: '1fr',

  variants: {
    size: {
      xs: {
        gridTemplateColumns: 'minmax(12rem, 2fr) 4fr 1fr',
      },
      sm: {
        gridTemplateColumns: 'minmax(12rem, 1fr) 3fr',
      },
    },
  },
})

export const DeliveryFormInput = styled('input', {
  fontSize: '0.875rem',
  fontFamily: '$text',
  fontWeight: 400,
  padding: '0.75rem',
  borderRadius: 4,
  border: 'solid 1px $buttonColor',
  backgroundColor: '$inputColor',
  color: '$textColor',
  width: '100%',

  '&::placeholder': {
    color: '$labelColor',
  },

  '&:focus': {
    outline: 'none',
    border: 'solid 1px $yellow900',
  },
})

export const ToggleRoot = styled(ToggleGroup.Root, {
  display: 'flex',
  gap: '0.75rem',
  marginTop: '2rem',
})

export const ToggleItem = styled(ToggleGroup.Item, {
  alignItems: 'center',
  backgroundColor: '$buttonColor',
  border: 'solid 1px transparent',
  borderRadius: 6,
  color: '$textColor',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '0.75rem',
  gap: '0.75rem',
  justifyContent: 'center',
  lineHeight: '100%',
  padding: '1rem',
  transition: '.3s',
  textTransform: 'uppercase',

  '& svg': {
    color: '$purple500',
    fontSize: '0.875rem',
  },

  '&:hover': {
    backgroundColor: '$hoverColor',
  },

  '&[data-state=on]': {
    backgroundColor: '$purple100',
    border: 'solid 1px $purple500',
  },
})
