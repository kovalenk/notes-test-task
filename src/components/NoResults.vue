<template>
  <div class="no-results">
    <img src="@/assets/image/no_data.png" alt="No results" />
    <p class="label-inter">No notes found. Click here to create a new note</p>
    <button class="btn btn__action" @click="openModal(EnumModalKeys.AddNote)">Create</button>
  </div>
</template>

<script setup lang="ts">
import { openModal } from '@/composables/modalActions'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
</script>

<style lang="scss" scoped>
.no-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 12px;
  flex: 1 1 auto;
  padding-bottom: 140px;

  img {
    margin-bottom: 16px;
  }

  .label-inter {
    max-width: 267px;

    font-size: 18px;
    line-height: 24px;
    font-weight: 500;

    white-space: pre-wrap;
    text-align: center;
  }

  .btn {
    width: fit-content;
  }
}
</style>
