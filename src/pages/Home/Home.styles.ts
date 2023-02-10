import { styled } from '../../styles'
import BackgroundBlur from '../../assets/backgroundBlur.svg'

export const BackgroundContainer = styled('div', {
  backgroundImage: `url(${BackgroundBlur})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
})

export const Container = styled('section', {
  padding: '5.75rem 0',
  display: 'flex',
  gap: '3.5rem',
})

export const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

export const TitleContent = styled('div', {
  h1: {
    color: '$titleColor',
    fontFamily: '$header',
    fontSize: '3rem',
    fontWeight: 800,
    lineHeight: 1.3,
  },
  h2: {
    color: '$subtitleColor',
    fontSize: '1.25rem',
    lineHeight: 1.3,
    fontWeight: 400,
    marginTop: '1rem',
  },
})

export const ListContent = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  listStyle: 'none',

  li: {
    gap: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
})

export const Icon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  color: '$white',
  borderRadius: 99999,

  variants: {
    color: {
      orange: {
        backgroundColor: '$yellow900',
      },
      yellow: {
        backgroundColor: '$yellow500',
      },
      dark: {
        backgroundColor: '$textColor',
      },
      purple: {
        backgroundColor: '$purple500',
      },
    },
  },
})
