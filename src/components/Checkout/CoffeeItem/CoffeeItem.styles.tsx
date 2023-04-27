import { styled } from '@/styles'

export const Wrapper = styled('div', {
  '&::after': {
    content: '',
    display: 'block',
    backgroundColor: '$buttonColor',
    margin: '1.5rem 0',
    width: '100%',
    height: 1,
  },
})

export const ItemContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ImgAndNameContent = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
})

export const ImgCoffee = styled('img', {
  maxWidth: '4rem',
  width: '100%',
})

export const ControlCoffeeContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
})

export const TitleCoffee = styled('span', {
  color: '$subtitleColor',
})

export const ControlButtons = styled('div', {
  display: 'flex',
  gap: '0.5rem',
})

export const QtdContainer = styled('div', {
  backgroundColor: '$buttonColor',
  borderRadius: 6,
  color: '$textColor',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: '0.75rem',
  lineHeight: '100%',
  padding: '0.5rem',
  textTransform: 'uppercase',
})

export const ControlQtdBtn = styled('button', {
  cursor: 'pointer',
  color: '$purple500',
  transition: '0.2s',

  '&:hover': {
    color: '$purple900',
  },
})

export const RemoveButton = styled('button', {
  backgroundColor: '$buttonColor',
  borderRadius: 6,
  color: '$textColor',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: '0.75rem',
  lineHeight: '100%',
  padding: '0.5rem',
  textTransform: 'uppercase',
  transition: '0.2s',

  '& svg': {
    color: '$purple500',
  },

  '&:hover': {
    backgroundColor: '$hoverColor',
    color: '$subtitleColor',
    '& svg': {
      color: '$purple900',
    },
  },
})

export const PriceContent = styled('span', {
  color: '$textColor',
  fontSize: '1rem',
  fontWeight: 700,
})
