import { atom, useAtom } from 'jotai'
import { ChangeEvent } from 'react'

const initialState = {
  cep: '',
  address: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  uf: '',
  paymentMethod: '',
}

const coffeeForm = atom(initialState)

const completedForm = atom(initialState)

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
  const [formStore, setFormStore] = useAtom(coffeeForm)
  const [completedFormValues, setCompletedFormValues] = useAtom(completedForm)
  const cepValue = formStore.cep
  const addressValue = formStore.address
  const numberValue = formStore.number
  const complementValue = formStore.complement
  const districtValue = formStore.district
  const cityValue = formStore.city
  const ufValue = formStore.uf
  const paymentMethodValue = formStore.paymentMethod

  function setCepValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      cep: input.currentTarget.value,
    }))
  }

  function setAddressValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      address: input.currentTarget.value,
    }))
  }

  function setNumberValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      number: input.currentTarget.value,
    }))
  }

  function setComplementValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      complement: input.currentTarget.value,
    }))
  }

  function setDistrictValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      district: input.currentTarget.value,
    }))
  }

  function setCityValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      city: input.currentTarget.value,
    }))
  }

  function setUfValue(input: ChangeEvent<HTMLInputElement>) {
    setFormStore((state) => ({
      ...state,
      uf: input.currentTarget.value,
    }))
  }

  function setPaymentMethodValue(value: string) {
    setFormStore((state) => ({
      ...state,
      paymentMethod: value,
    }))
  }

  const isNotFullyCompleted = Object.keys(formStore).some(
    (input) => !formStore[input as keyof FormInputs]
  )

  function submitForm() {
    setCompletedFormValues(formStore)
  }

  function resetCheckoutForm() {
    setFormStore(initialState)
  }

  return {
    formStore,
    inputs: {
      cep: { cepValue, setCepValue },
      address: { addressValue, setAddressValue },
      number: { numberValue, setNumberValue },
      complement: { complementValue, setComplementValue },
      district: { districtValue, setDistrictValue },
      city: { cityValue, setCityValue },
      uf: { ufValue, setUfValue },
      paymentMethod: { paymentMethodValue, setPaymentMethodValue },
    },
    isNotFullyCompleted,
    completedFormValues,
    submitForm,
    resetCheckoutForm,
  }
}
