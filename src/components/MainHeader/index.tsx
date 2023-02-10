import {
  ButtonCart,
  ButtonLocation,
  HeaderContainer,
  HeaderContent,
  QtdCircle,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useCartQtd } from '@/hooks/cart'
import { routesNames } from '@/routes/routesNames'
import { Link } from 'react-router-dom'

export function MainHeader() {
  const cartQtd = useCartQtd()
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
