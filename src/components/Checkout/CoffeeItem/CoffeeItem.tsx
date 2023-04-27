import { useCoffee } from '@/store/coffees'
import * as Styles from './CoffeeItem.styles'
import { priceConvert } from '@/utils/priceConvert'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '@/store/cart'

interface CoffeeItemProps {
  id: number
  coffeeQtd: number
}

export default function CoffeeItem({ coffeeQtd, id }: CoffeeItemProps) {
  const { filteredCoffee } = useCoffee()
  const { cartRemoveOneCoffee, cartAddOneCoffee, cartRemove } = useCart()
  const coffee = filteredCoffee(id)
  const coffeePrice = coffee && priceConvert(coffee.price * coffeeQtd, true)

  function handleRemoveCoffeeClick() {
    cartRemoveOneCoffee(id)
  }

  function handleAddCoffeeClick() {
    cartAddOneCoffee(id)
  }

  function handleRemoveBtnClick() {
    cartRemove(id)
  }

  return (
    <Styles.Wrapper>
      <Styles.ItemContent>
        <Styles.ImgAndNameContent>
          <Styles.ImgCoffee src={coffee?.imgUrl} alt={coffee?.description} />
          <Styles.ControlCoffeeContent>
            <Styles.TitleCoffee>{coffee?.name}</Styles.TitleCoffee>
            <Styles.ControlButtons>
              <Styles.QtdContainer>
                <Styles.ControlQtdBtn onClick={handleRemoveCoffeeClick}>
                  <Minus />
                </Styles.ControlQtdBtn>
                {coffeeQtd}
                <Styles.ControlQtdBtn onClick={handleAddCoffeeClick}>
                  <Plus />
                </Styles.ControlQtdBtn>
              </Styles.QtdContainer>
              <Styles.RemoveButton onClick={handleRemoveBtnClick}>
                <Trash /> Remover
              </Styles.RemoveButton>
            </Styles.ControlButtons>
          </Styles.ControlCoffeeContent>
        </Styles.ImgAndNameContent>
        <Styles.PriceContent>{coffeePrice}</Styles.PriceContent>
      </Styles.ItemContent>
    </Styles.Wrapper>
  )
}
