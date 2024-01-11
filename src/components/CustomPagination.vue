<template>
  <div class="pagination">
    <button
      class="btn btn__default btn__icon"
      @click="active--"
      :class="{ disabled: active === 1 }"
    >
      <i class="icon icon-arrow-left"></i>
    </button>
    <button
      class="btn btn__default"
      v-for="(item, key) in pagesArr"
      :key="key"
      :class="{ btn__action: item === active, 'not-active': item === '...' }"
      @click="active = item"
    >
      {{ item }}
    </button>
    <button
      class="btn btn__default btn__icon"
      @click="active++"
      :class="{ disabled: active === pages }"
    >
      <i class="icon icon-arrow-right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, watch } from 'vue'
import { isMobile } from '@/composables/actionFunctions'

const props = defineProps({
  activePage: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 6
  }
})

const emit = defineEmits(['pageChanged'])

const active = ref(1)

watch(
  () => props.activePage,
  () => {
    active.value = props.activePage
  }
)

watch(active, () => {
  emit('pageChanged', active.value)
})

const pages = computed(() => {
  return Math.ceil(props.total / props.perPage)
})

const pagesArr = computed(() => {
  return new Array(pages.value)
    .fill(0)
    .map((value, i, arr) => {
      if (Math.abs(active.value - (i + 1)) <= (isMobile ? 1 : 2) || arr.length - 1 === i || !i) {
        return i + 1
      } else {
        return '...'
      }
    })
    .filter((value, i, arr) => {
      if (i) {
        return value !== arr[i - 1]
      } else {
        return true
      }
    })
})
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;

  gap: 4px;
  padding: 0 32px;

  @include media_tablet {
    justify-content: center;

    height: 36px;
    gap: 2px;
    margin-top: 16px;
    padding: 0 16px;
  }

  .btn__default {
    width: fit-content;
    padding: 10px 18px;
    margin: 0;

    background-color: transparent;

    @include media_tablet {
      min-width: 32px;
      padding: 8px 10px;
    }

    i {
      background-color: var(--primary);
    }

    &.btn__icon {
      padding: 8px 12px;

      &:hover {
        background-color: var(--primary-light);
      }

      @include media_tablet {
        padding: 8px 8px;
      }
    }

    &.btn__action {
      background-color: var(--primary);
    }

    &.not-active {
      pointer-events: none;

      @include media_tablet {
        padding: 10px 8px;
      }
    }

    &.disabled {
      pointer-events: none;

      i {
        background-color: var(--grey-content);
      }

      &:hover {
        background-color: transparent;
      }
    }
  }

  .icon {
    &-arrow-left {
      transform: rotate(90deg);
      mask-image: url('@/assets/icons/arrow.svg');
    }

    &-arrow-right {
      transform: rotate(-90deg);
      mask-image: url('@/assets/icons/arrow.svg');
    }
  }
}
</style>
