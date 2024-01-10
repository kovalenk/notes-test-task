<template lang="pug">
.no-results
  img(src="src/assets/image/no_data.png" alt="No results")
  p.label-inter No notes found. Click here to create a new note
  button.btn.btn__action Create
</template>

<script setup lang="ts"></script>

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
