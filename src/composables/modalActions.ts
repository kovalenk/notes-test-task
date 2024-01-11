import { ref } from 'vue'
import type { ModalTypes } from '@/types/ModalTypes'
import { EnumModalKeys } from '@/constants/EnumModalKeys'

export const modalKeys = ref<ModalTypes>({})
export const currentKey = ref()

export const openModal = (key: string) => {
  currentKey.value = key
  modalKeys.value[currentKey.value] = !modalKeys.value[currentKey.value]
}
export const closeModal = (key: string) => {
  currentKey.value = key
  modalKeys.value[currentKey.value] = false
}

export const isOpen = (key: string) => {
  return modalKeys.value[key]
}
