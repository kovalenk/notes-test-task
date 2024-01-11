import { onMounted, onUnmounted, ref } from "vue";
export const isDesktop = ref();
export const isLaptop = ref();
export const isSmallLaptop = ref();
export const isTablet = ref();
export const isSmallTablet = ref();
export const isMobile = ref();
export const isSmallMobile = ref();
export const windowWidth = ref(window.innerWidth);
export const windowHeight = ref(window.innerHeight);
export function listener() {
  isDesktop.value = window.innerWidth <= 4096;
  isLaptop.value = window.innerWidth <= 1366;
  isSmallLaptop.value = window.innerWidth <= 1280;
  isTablet.value = window.innerWidth <= 1024;
  isSmallTablet.value = window.innerWidth <= 768;
  isMobile.value = window.innerWidth <= 640;
  isSmallMobile.value = window.innerWidth <= 375;
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
}
export function addListener() {
  onMounted(() => {
    listener();
    addEventListener("resize", listener);
  });
  onUnmounted(() => {
    removeEventListener("resize", listener);
  });
}
