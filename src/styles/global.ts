import { globalCss } from '.'

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
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
  },
})
