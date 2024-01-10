<script setup lang="ts">
import { openModal } from '@/composables/modalActions'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
</script>

<template>
  <div class="header">
    <router-link class="logo_header" to="/home"></router-link>
    <div class="nav-section">
      <ul>
        <li>
          <router-link class="label-inter" to="/home" exact-active-class="active">Home</router-link>
        </li>
        <li>
          <router-link class="label-inter" to="/statistics" exact-active-class="active"
            >Statistics</router-link
          >
        </li>
      </ul>
      <button class="btn btn__action" @click="openModal(EnumModalKeys.AddNote)">Create</button>
    </div>
    <div class="profile-logo">
      <img src="@/assets/image/male.svg" alt="profile_img" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    background: transparent url('@/assets/image/logo.svg') no-repeat center / 40px;
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
