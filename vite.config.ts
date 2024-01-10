import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
         @import '~@/scss/_colors.scss';
         @import '~@/scss/_media.scss';
         @import "~@/scss/mixin/font";
         `,
      },
    },
  },
});
