import { Link } from 'react-router-dom'
import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '$backgroundColor',
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

export const ButtonCart = styled(Link, {
  display: 'inline-flex',
  padding: '0.625rem 0.625rem',
  marginLeft: '0.75rem',
  color: '$yellow900',
  background: '$yellow100',
  position: 'relative',
  transition: 'background-color .1s, color .3s',
  borderRadius: 6,

  '&:hover': {
    background: '$yellow500',
    color: '$white',
  },
})

export const QtdCircle = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  position: 'absolute',
  top: -5,
  right: -5,
  background: '$yellow900',
  color: '$white',
  fontSize: '0.75rem',
  width: '1.25rem',
  height: '1.25rem',
  lineHeight: 0,
  fontFamily: '$text',
  fontWeight: 'bold',
})
