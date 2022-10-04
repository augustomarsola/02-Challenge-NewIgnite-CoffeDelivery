import { ButtonCart, ButtonLocation, HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function MainHeader() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo Coffee Delivery - Foguete no copo" />
      </div>
      <div>
        <ButtonLocation>
          <MapPin weight="fill" /> São Paulo, SP
        </ButtonLocation>
        <ButtonCart>
          <ShoppingCart weight="fill" />
        </ButtonCart>
      </div>
    </HeaderContainer>
  )
}
