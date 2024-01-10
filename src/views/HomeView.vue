<template lang="pug">
.main-view
  h2.title-inter All Notes
  .table-data(v-if="list.length")
  no-results(v-else)
</template>

<script lang="ts" setup>
import NoResults from "src/components/NoResults.vue";
import { noteStore } from "src/store/check";

const { list } = noteStore();
</script>

<style scoped lang="scss"></style>
