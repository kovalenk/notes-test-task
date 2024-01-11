import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { NoteInterface } from '@/types/NotesInterface'

export const useNoteStore = defineStore(
  'notes',
  () => {
    const data = ref({
      list: [] as NoteInterface[]
    })

    const isDataListExists = computed(() => {
      return !!data.value.list.length
    })

    const totalCharacters = computed(() => {
      return data.value.list.reduce((total, item) => total + item.text.length, 0)
    })

    const findIndex = (payload: string) => data.value.list.findIndex((f) => f.id === payload)

    const editRow = (payload: { index: number; text: string }) => {
      data.value.list[payload.index].text = payload.text
    }

    const addNewItem = (payload: string) => {
      const generateId = (): string => Math.random().toString(16).slice(2)
      const newItem: NoteInterface = {
        text: payload,
        id: generateId()
      }
      data.value.list.push(newItem)
    }

    const removeItem = (payload: string) => {
      const index = findIndex(payload)
      if (index !== -1) {
        data.value.list.splice(index, 1)
      }
    }

    return { data, isDataListExists, totalCharacters, findIndex, addNewItem, removeItem, editRow }
  },
  {
    persist: true
  }
)
