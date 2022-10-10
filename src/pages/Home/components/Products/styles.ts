import { styled } from '../../../../styles'

export const Container = styled('main', {
  padding: '2rem 0',
  margin: '0 auto',
  maxWidth: '70rem',
})

export const ProductTitle = styled('h2', {
  fontFamily: '$header',
  fontSize: '2rem',
})

export const ProductContainer = styled('ul', {
  display: 'grid',
  gap: '2rem',
  rowGap: '2.5rem',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  marginTop: '3.375rem',
})

export const ProductContent = styled('li', {
  backgroundColor: '$cardColor',
  borderRadius: '6px 36px 6px 36px',
  listStyle: 'none',
  padding: '0 1.25rem 1.25rem 1.25rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  img: {
    marginTop: '-1.25rem',
  },

  h4: {
    marginTop: '1rem',
    fontFamily: '$header',
    fontSize: '1.25rem',
    textAlign: 'center',
  },
})

export const CoffeeTags = styled('span', {
  display: 'flex',
  gap: '0.25rem',
  marginTop: '0.75rem',

  span: {
    display: 'inline-block',
    borderRadius: 100,
    backgroundColor: '$yellow100',
    textTransform: 'uppercase',
    padding: '0.25rem 0.5rem',
    color: '$yellow900',
    fontWeight: '700',
    fontSize: '0.625rem',
  },
})

export const CoffeeDescription = styled('p', {
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '$labelColor',
  marginTop: '.5rem',
})

export const ProductCartControl = styled('div', {
  marginTop: '2.25rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ProductPrice = styled('p', {
  fontFamily: '$header',
  fontSize: '1.5rem',

  span: {
    fontFamily: '$text',
    fontSize: '0.875rem',
    marginRight: '.15rem',
  },
})

export const ProductOptionsContent = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'stretch',
})

export const ProductControl = styled('div', {
  backgroundColor: '$buttonColor',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  borderRadius: 6,

  button: {
    color: '$purple500',
    cursor: 'pointer',

    '&:hover': {
      color: '$purple900',
    },
  },
})

export const CartButton = styled('button', {
  cursor: 'pointer',
  backgroundColor: '$purple900',
  color: '$white',
  padding: '.5rem',
})
