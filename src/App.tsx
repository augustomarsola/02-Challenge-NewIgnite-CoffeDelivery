import { MainHeader } from './components/MainHeader'
import { CoffeeContextProvider } from './context/CoffeeContext'
import { Home } from './pages/Home'
import { globalStyle } from './styles/global'

export function App() {
  globalStyle()
  return (
    <CoffeeContextProvider>
      <MainHeader />
      <Home />
    </CoffeeContextProvider>
  )
}
