<template lang="pug">
.header
  router-link.logo_header(to="/home")
  .nav-section
    ul
      li
        router-link.label-inter(to="/home" exact-active-class="active") Home
      li
        router-link.label-inter(to="/statistics" exact-active-class="active") Statistics
    button.btn.btn__action Create
  .profile-logo
    img(src="src/assets/image/male.svg" alt="Item Image")
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "src/scss/core/_media.scss";

.header {
  display: flex;
  align-items: center;
  box-sizing: border-box;

  height: 80px;
  padding: 0 40px;
  gap: 40px;

  background-color: var(--white);
  box-shadow: var(--box-shadow);

  .logo_header {
    min-width: 40px;
    height: 40px;
    background: transparent url("src/assets/image/logo.svg") no-repeat center /
      40px;
  }

  .nav-section {
    display: flex;
    align-items: center;

    flex: 1 1 auto;
    gap: 26px;

    ul {
      display: flex;
      gap: 20px;

      .label-inter {
        font-size: 16px;
        font-weight: 500;

        text-decoration: none;

        &:hover,
        &.active {
          text-decoration: underline;

          color: var(--primary);
        }
      }
    }

    .btn {
      width: fit-content;
    }
  }

  .profile-logo {
    min-width: 44px;

    img {
      min-width: 44px;
      min-height: 44px;
    }
  }
}
</style>
