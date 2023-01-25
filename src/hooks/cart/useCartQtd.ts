import { useAtom } from 'jotai'
import { cartAtom } from '@/atoms/CartAtom'

export default function useCartQtd() {
  const [cart] = useAtom(cartAtom)
  const cartQtd = cart.reduce((prev, current) => {
    if (current.quantity) {
      return current.quantity + prev
    }
    return prev
  }, 0)
  return cartQtd
}
