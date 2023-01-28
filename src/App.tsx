import { RouterProvider } from 'react-router-dom'
import { ToastProvider } from './components/Toast/ToastProvider'
import { globalStyle } from './styles/global'
import { router } from './routes/router'

export function App() {
  globalStyle()
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  )
}
