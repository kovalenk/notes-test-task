import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    const data = ref({
      isAuthorized: false,
    });

    const setAuthorized = () => {
      data.value.isAuthorized = true;
    };

    const clear = () => {
      data.value = {
        isAuthorized: false,
      };
    };

    return { data, setAuthorized, clear };
  },
  {
    persist: true,
  }
);
