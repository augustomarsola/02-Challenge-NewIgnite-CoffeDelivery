import {
  ButtonCart,
  ButtonLocation,
  HeaderContainer,
  HeaderContent,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function MainHeader() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={Logo} alt="Logo Coffee Delivery - Foguete no copo" />
        </div>
        <div>
          <ButtonLocation>
            <MapPin size={20} weight="fill" /> São Paulo, SP
          </ButtonLocation>
          <ButtonCart>
            <ShoppingCart size={20} weight="fill" />
          </ButtonCart>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
