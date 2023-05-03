import { SmallTitle } from '@/components/SmallTitle'
import { routesNames } from '@/routes/routesNames'
import { useCart } from '@/store/cart'
import { priceConvert } from '@/utils/priceConvert'
import { CoffeeItem } from '../CoffeeItem'
import { useNavigate } from 'react-router-dom'
import * as Styles from './SelectedCoffee.styles'
import { useCoffeeForm } from '@/store/form'
import { useEffect, useRef, useState } from 'react'
import { ToastCompleteForm } from '@/components/Toast/ToastCompleteForm'

export default function SelectedCoffee() {
  const { cart, cartTotal } = useCart()
  const [openToastCompleteForm, setOpenToastCompleteForm] = useState(false)
  const { submitForm, resetCheckoutForm, isNotFullyCompleted } = useCoffeeForm()
  const navigate = useNavigate()
  const portage = 3.5
  const totalPrice = cartTotal + portage

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  function handlerConfirmOrderClick() {
    if (isNotFullyCompleted) {
      setOpenToastCompleteForm(false)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => {
        setOpenToastCompleteForm(true)
      }, 100)
    } else {
      submitForm()
      navigate(routesNames.confirmed)
      resetCheckoutForm()
    }
  }

  return (
    <>
      <Styles.Wrapper>
        <SmallTitle>Cafés Selecionados</SmallTitle>
        <Styles.SelectedCoffeeCard>
          {cart.map((coffee) => (
            <CoffeeItem
              coffeeQtd={coffee.quantity}
              id={coffee.id}
              key={coffee.id}
            />
          ))}
          <div>Lista de Cafés</div>
          <Styles.ResumeContent>
            <Styles.ResumeRow>
              <span>Total de itens</span>
              <span>{priceConvert(cartTotal, true)}</span>
            </Styles.ResumeRow>
            <Styles.ResumeRow>
              <span>Entrega</span>
              <span>{priceConvert(portage, true)}</span>
            </Styles.ResumeRow>
            <Styles.ResumeRow resumeTotal>
              <span>Total de itens</span>
              <span>{priceConvert(totalPrice, true)}</span>
            </Styles.ResumeRow>
          </Styles.ResumeContent>
          <Styles.ConfirmOrderButton onClick={handlerConfirmOrderClick}>
            Confirmar Pedido
          </Styles.ConfirmOrderButton>
        </Styles.SelectedCoffeeCard>
      </Styles.Wrapper>
      <ToastCompleteForm
        open={openToastCompleteForm}
        setOpen={setOpenToastCompleteForm}
      />
    </>
  )
}
