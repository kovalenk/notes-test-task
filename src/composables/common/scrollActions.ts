import { ref } from "vue";

type EventTypes = {
  target: {
    scrollTop: number;
  };
};

export const scrollTop = ref(0);
export const topPosition = ref(0);
export const scrolled = ref(0);

export const scrollEvent = (event: EventTypes) => {
  requestAnimationFrame(() => {
    if (event.target.scrollTop) {
      scrollTop.value = event.target.scrollTop;
      scrolled.value = event.target.scrollTop - topPosition.value;
    }
  });
};
