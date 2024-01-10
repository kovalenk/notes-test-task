<script lang="ts" setup>
import { onBeforeUnmount, defineEmits } from 'vue'

import { isOpen, currentKey, openModal } from '@/composables/modalActions'
import useDisableScroll from '@/features/useDisableScroll'

const close = () => {
  if (isOpen(currentKey.value)) {
    openModal(currentKey.value)
    emit('onClose')
  }
}
const emit = defineEmits(['onClose'])

const keyPress = (event: KeyboardEvent) => {
  if (event && event.code === 'Escape') {
    close()
  }
}
useDisableScroll()
document.addEventListener('keydown', keyPress)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyPress)
})
</script>

<template>
  <teleport to="body">
    <transition name="fade" appear>
      <div class="modal" v-if="isOpen(currentKey)" :class="currentKey">
        <div class="modal--backdrop" v-on:click="close"></div>
        <div class="modal--container">
          <div class="modal--wrapper">
            <div class="modal--close" v-on:click="close">
              <i class="icon icon-close"></i>
            </div>
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &--backdrop {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(15, 14, 30, 0.8);
    top: 0;
    left: 0;
  }

  &--container {
    position: relative;
    max-height: 100%;
    overflow: initial;
    padding: 24px;
    z-index: 11;

    width: 100%;
    max-width: 660px;

    border-radius: 16px;
    background-color: var(--white);

    @include media_tablet {
      max-width: auto;
      margin: 0 93px;
    }
    @include media_mobile {
      padding: 16px;
      margin: 0 10px;
    }
  }

  &--wrapper {
    display: flex;
    flex-direction: column;

    background-color: inherit;
    border-radius: 12px;

    .modal {
      &-body {
        flex: 1;
      }

      &-footer {
        display: flex;
        justify-content: flex-end;

        gap: 12px;
        min-height: 52px;
      }
    }
  }

  &--close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 9;
    cursor: pointer;
    display: block;
    width: 23px;
    height: 25px;
    @include media_mobile {
      width: 20px;
      height: 20px;
    }

    .icon {
      &-close {
        mask-size: contain;
        mask-image: url('@/assets/icons/close.svg');
        -webkit-mask-size: contain;
      }
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
