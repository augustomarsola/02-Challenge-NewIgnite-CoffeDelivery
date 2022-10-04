import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      yellow100: '#F1E9C9',
      yellow500: '#DBAC2C',
      yellow900: '#C47F17',
      purple100: '#EBE5F9',
      purple500: '#8047F8',
      purple900: '#4B2995',
      titleColor: '#272221',
      subtitleColor: '#403937',
      textColor: '#574F4D',
      labelColor: '#8D8686',
      hoverColor: '#D7D5D5',
      buttonColor: '#E6E5E5',
      inputColor: '#EDEDED',
      cardColor: '#F3F2F2',
      backgroundColor: '#DDDDDD',
      white: '#FFFFFF',
    },
    fonts: {
      header: "'Baloo 2', cursive",
      text: "'Roboto', sans-serif",
    },
  },
})
