import { MainHeader } from './components/MainHeader'
import { Home } from './pages/Home'
import { globalStyle } from './styles/global'

export function App() {
  globalStyle()
  return (
    <>
      <MainHeader />
      <Home />
    </>
  )
}
