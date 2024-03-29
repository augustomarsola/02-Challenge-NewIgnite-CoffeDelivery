import { styled } from '@/styles'

export const Wrapper = styled('div', {
  alignItems: 'flex-end',
  display: 'flex',
  justifyContent: 'space-between',
})

export const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const TitleContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})

export const ConfirmedTitle = styled('p', {
  color: '$yellow900',
  fontFamily: '$header',
  fontSize: '2rem',
})

export const ConfirmedSubTitle = styled('p', {
  color: '$subtitleColor',
  fontSize: '1.25rem',
})

export const FormInfoContent = styled('div', {
  background: `linear-gradient($backgroundColor, $backgroundColor) padding-box,               linear-gradient(to right, $yellow500, $purple500) border-box`,
  borderRadius: '6px 36px 6px 36px',
  border: 'solid 1px transparent',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
  padding: '2.5rem',
})

export const FinalInfosContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

export const FinalInfoIcon = styled('div', {
  backgroundColor: '$purple500',
  borderRadius: '50%',
  color: '$white',
  fontSize: '1.5rem',
  lineHeight: 0,
  padding: '0.5rem',

  variants: {
    color: {
      yellow: {
        backgroundColor: '$yellow500',
      },
      brown: {
        backgroundColor: '$yellow900',
      },
    },
  },
})

export const FinalInfoText = styled('div', {
  color: '$textColor',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1rem',
})

export const ConfirmedImg = styled('img', {
  maxWidth: '100%',
  marginBottom: '-0.75rem',
})
