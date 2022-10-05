import { styled } from '../../styles'

export const Container = styled('section', {
  padding: '2rem 0',
  margin: '0 auto',
  maxWidth: '70rem',
  marginTop: '6.75rem',
  display: 'flex',
  gap: '3.5rem',
})

export const TitleContent = styled('div', {
  h1: {
    fontFamily: '$header',
    fontSize: '3rem',
    fontWeight: 800,
  },
  h2: {
    fontSize: '1.25rem',
    fontWeight: 400,
  },
})
