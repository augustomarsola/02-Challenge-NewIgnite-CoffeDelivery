import { atom, useAtom } from 'jotai'

const coffeeForm = atom({
  cep: '',
  address: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  uf: '',
  paymentMethod: '',
})

type FormInputs = {
  cep: string
  address: string
  number: string
  complement: string
  district: string
  city: string
  uf: string
  paymentMethod: string
}

export default function useCoffeeForm() {
  const [form, setForm] = useAtom(coffeeForm)

  function finishOrder(formInputs: FormInputs) {
    setForm(formInputs)
  }

  return {
    form,
    finishOrder,
  }
}
