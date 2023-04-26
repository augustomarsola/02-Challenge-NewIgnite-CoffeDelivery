import {
  ButtonCart,
  ButtonLocation,
  HeaderContainer,
  HeaderContent,
  QtdCircle,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { routesNames } from '@/routes/routesNames'
import { Link } from 'react-router-dom'
import { useCart } from '@/store/cart'

export function MainHeader() {
  const { cartQtd } = useCart()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={Logo} alt="Logo Coffee Delivery - Foguete no copo" />
        </Link>
        <div>
          <ButtonLocation>
            <MapPin size={20} weight="fill" /> São Paulo, SP
          </ButtonLocation>
          <ButtonCart to={routesNames.checkout}>
            <ShoppingCart size={20} weight="fill" />
            {!!cartQtd && <QtdCircle>{cartQtd}</QtdCircle>}
          </ButtonCart>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
