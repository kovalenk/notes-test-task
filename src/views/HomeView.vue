<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import router from '@/router'

import NoResults from '@/components/NoResults.vue'
import CustomDropDown, { type DropDownPropsInterface } from '@/components/CustomDropDown.vue'
import CustomPagination from '@/components/CustomPagination.vue'

import { modalKeys, openModal } from '@/composables/modalActions'

import { useNoteStore } from '@/stores/notes'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
import DeleteNote from '@/modals/DeleteNote.vue'

const { isDataListExists, data } = useNoteStore()
const deleteKey = ref('')
const page = ref(1)
const perPage = ref(10)

const dataSlice = computed(() => {
  return data.list.slice(perPage.value * (page.value - 1), perPage.value * (page.value * 1))
})
const showPagination = computed(() => {
  return data.list.length > perPage.value
})
const editItem = (id: string, props: DropDownPropsInterface) => {
  router.push(`/edit-mode/${id}`)
  props.toggleVisibility()
}
const deleteItem = (id: string, props: DropDownPropsInterface) => {
  deleteKey.value = id
  nextTick(() => {
    openModal(EnumModalKeys.DeleteNote)
    props.toggleVisibility()
  })
}
const updatePage = (step: number) => {
  page.value = step
}
</script>

<template>
  <div class="main-view">
    <h2 class="title-inter">All Notes</h2>
    <template v-if="isDataListExists">
      <div class="table-data">
        <table class="common--table">
          <tr class="common--table-header">
            <th>ID</th>
            <th>Note</th>
            <th>Characters</th>
            <th class="common--table-menu"></th>
          </tr>
          <tr v-for="(note, key) in dataSlice" :key="key" class="common--table-item">
            <td>{{ note.id }}</td>
            <td>{{ note.text }}</td>
            <td>{{ note.text.length }}</td>
            <td>
              <custom-drop-down>
                <template v-slot:selectedItem="">
                  <div class="common--table-menu menu"></div>
                </template>
                <template v-slot:content="props">
                  <ul>
                    <li class="label-inter" @click="editItem(note.id, props)">
                      <i class="icon icon-pen action"></i>
                      Edit
                    </li>
                    <li class="label-inter" @click="deleteItem(note.id, props)">
                      <i class="icon icon-trash action"></i>
                      Delete
                    </li>
                  </ul>
                </template>
              </custom-drop-down>
            </td>
          </tr>
        </table>
      </div>
      <custom-pagination
        v-if="showPagination"
        :total="data.list.length"
        :per-page="perPage"
        :active-page="page"
        @pageChanged="updatePage"
      ></custom-pagination>
    </template>
    <no-results v-else></no-results>
  </div>
  <delete-note v-if="modalKeys[EnumModalKeys.DeleteNote]" :note-id="deleteKey"></delete-note>
</template>

<style lang="scss" scoped>
@import '@/scss/common/table';
.table-data {
  margin: 30px 0;
  min-height: 489px;
}
</style>
