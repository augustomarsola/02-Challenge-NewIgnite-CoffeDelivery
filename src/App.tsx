import { MainHeader } from './components/MainHeader'
import { globalStyle } from './styles/global'

export function App() {
  globalStyle()
  return (
    <>
      <MainHeader />
      <div>hello</div>
    </>
  )
}
