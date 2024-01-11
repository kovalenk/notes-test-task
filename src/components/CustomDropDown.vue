<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useClickOutside } from '@/composables/common/clickOutside'
import { scrolled, scrollTop, topPosition } from '@/composables/common/scrollActions'

const props = defineProps({
  blockMenu: { type: Boolean, default: false }
})

export type DropDownPropsInterface = { toggleVisibility(): void }

const currentItem = ref(null)
const isVisible = ref(false)
const openMenu = ref('')

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
  scrolled.value = 0
  if (openMenu.value === 'active') {
    openMenu.value = ''
    topPosition.value = scrollTop.value
  } else {
    openMenu.value = 'active'
  }
}

useClickOutside(currentItem, () => {
  if (openMenu.value === 'active') {
    toggleVisibility()
  }
})
</script>

<template>
  <div class="drop-down" ref="currentItem">
    <div class="drop-down--section">
      <button
        class="selected-item"
        @click="toggleVisibility"
        :class="openMenu === 'active' ? 'active' : ''"
        aria-label="open dropdown"
      >
        <slot name="selectedItem"></slot>
      </button>
      <div class="drop-down--content" :class="openMenu === 'active' && !blockMenu ? 'active' : ''">
        <transition name="dropdown-fade">
          <div class="drop-down--bg">
            <ul class="drop-down--list" v-if="isVisible">
              <slot name="content" :toggleVisibility="toggleVisibility"></slot>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/core/_media';

.drop-down {
  &--section {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .selected-item {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 3px 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.04em;
    background: inherit;
    border: none;
    color: white;

    @include media_mobile {
      padding: 3px 27px 3px 10px;
    }

    &.active {
      .coins-section--arrow {
        transform: rotate(180deg);
        transition: all 0.3s;
      }
    }
  }

  &--list {
    overflow: auto;
    padding: 20px 0;
    width: 100%;
    max-height: 135px;
  }

  &--content {
    position: absolute;
    z-index: 100;
    display: none;
    right: 0;
    top: 33px;

    width: 140px;

    border-radius: 8px;
    background: var(--grey-background);
    box-shadow: var(--box-shadow);

    &.active {
      display: flex;
      flex-direction: column;
    }

    @include media_tablet {
      width: 120px;
    }

    ul {
      padding: 0;

      li {
        cursor: pointer;
        display: flex;
        align-items: center;

        gap: 12px;
        padding: 14px 16px;

        font-size: 16px;
        line-height: 24px;

        border-bottom: 1px solid var(--grey-line);

        &:first-child {
          border-radius: 8px 8px 0 0;
        }
        &:last-child {
          border-bottom: unset;
          border-radius: 0 0 8px 8px;
        }

        &.disabled {
          pointer-events: none;

          color: var(--grey-content);

          i {
            background-color: var(--grey-content);
          }
        }

        &:hover {
          background-color: var(--white);

          color: var(--primary);

          i {
            background-color: var(--primary);
          }
        }

        @include media_tablet {
          padding: 12px 16px;

          font-size: 14px;
          line-height: 20px;
        }
      }
    }

    &.account--drop-down,
    &.check--drop-down {
      width: 240px;
      z-index: 10;

      .drop-down--list {
        max-height: 300px;
        padding: unset;
      }

      ul {
        li {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          box-sizing: border-box;
          border-bottom: 1px solid var(--grey-line);
        }
      }
    }

    &.check--drop-down {
      @include media_tablet {
        width: 186px;

        ul {
          li {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
