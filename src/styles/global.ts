import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    lineHeight: '130%',
  },
  body: {
    backgroundColor: '$backgroundColor',
    fontFamily: '$text',
  },
  button: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    fontFamily: 'inherit',
  },
  a: {
    textDecoration: 'none',
  },
})
