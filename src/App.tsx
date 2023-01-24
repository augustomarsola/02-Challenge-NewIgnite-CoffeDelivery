import { MainHeader } from './components/MainHeader'
import { ToastProvider } from './components/Toast/ToastProvider'
import { Home } from './pages/Home'
import { globalStyle } from './styles/global'

export function App() {
  globalStyle()
  return (
    <ToastProvider>
      <MainHeader />
      <Home />
    </ToastProvider>
  )
}
