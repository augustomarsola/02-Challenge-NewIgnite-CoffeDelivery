import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function MainHeader() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo Coffee Delivery - Foguete no copo" />
      </div>
      <div>
        <button>
          <MapPin weight="fill" /> São Paulo, SP
        </button>
        <button>
          <ShoppingCart weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
