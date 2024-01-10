<script lang="ts" setup>
import NoResults from '@/components/NoResults.vue';
import { useNoteStore } from '@/stores/check'
const store = useNoteStore();
</script>

<template>
  <div class="main-view">
    <h2 class="title-inter">Statistics Page</h2>
    <div class="table-data" v-if="store.isDataListExists"></div>
    <no-results v-else></no-results>
  </div>
</template>
