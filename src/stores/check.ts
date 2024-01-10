import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import type { NoteInterface } from '@/types/NotesInterface'

export const useNoteStore = defineStore(
  "notes",
  () => {
    const data = ref({
      // Corrected types definition
      list: [] as NoteInterface[],
    });

    const isDataListExists = computed(() => {
      return !!data.value.list.length;
    })
    const addNewItem = (payload: string) => {
      const generateId = (): string => Math.random().toString(16).slice(2);
      const newItem: NoteInterface = {
        text: payload,
        id: generateId(),
      };
      data.value.list.push(newItem);
    };

    return { data, isDataListExists, addNewItem };
  },
  {
    persist: true,
  }
);
