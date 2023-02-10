import { MainHeader } from '@/components/MainHeader'
import { Outlet } from 'react-router-dom'
import * as Styles from './Root.styles'

export default function Root() {
  return (
    <Styles.Wrapper>
      <MainHeader />
      <Outlet />
    </Styles.Wrapper>
  )
}
