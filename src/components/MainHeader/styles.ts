import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
})

export const HeaderContent = styled('div', {
  padding: '2rem 0',
  maxWidth: '70rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ButtonLocation = styled('button', {
  padding: '0.625rem 0.5rem',
  color: '$purple900',
  background: '$purple100',
  gap: 4,
})

export const ButtonCart = styled('button', {
  padding: '0.625rem 0.5rem',
  marginLeft: '0.75rem',
  color: '$yellow900',
  background: '$yellow100',
})
