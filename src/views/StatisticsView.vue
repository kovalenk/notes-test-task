<script lang="ts" setup>
import NoResults from '@/components/NoResults.vue'
import { useNoteStore } from '@/stores/notes'
const store = useNoteStore()
</script>

<template>
  <div class="main-view">
    <h2 class="title-inter">Statistics Page</h2>
    <div class="table-data" v-if="store.isDataListExists">
      <table class="common--table">
        <tr class="common--table-header">
          <th>Stat</th>
          <th>Value</th>
        </tr>
        <tr class="common--table-item">
          <td>Number of Notes</td>
          <td>{{ store.data.list.length }}</td>
        </tr>
        <tr class="common--table-item">
          <td>Number of Characters (of all notes)</td>
          <td>{{ store.totalCharacters }}</td>
        </tr>
      </table>
    </div>
    <no-results v-else></no-results>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/common/table';
.table-data {
  margin: 30px 0;

  .common {
    &--table {
      &-header {
        th {
          &:first-child,
          &:last-child {
            min-width: unset;
          }

          &:first-child {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
