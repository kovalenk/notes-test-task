import { defineStore } from "pinia";
import { ref } from "vue";

export const noteStore = defineStore(
  "notes",
  () => {
    const list = ref([]);

    const clear = () => {
      list.value = [];
    };

    return { list, clear };
  },
  {
    persist: true,
  }
);
