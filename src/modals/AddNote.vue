<script lang="ts" setup>
import { onBeforeUnmount } from 'vue'

import AppModal from '@/modals/AppModal.vue'
import { checkValidation, getValidationClass } from '@/composables/validation'
import { useForm } from '@/composables/noteForm'
import { closeModal } from '@/composables/modalActions'
import { useNoteStore } from '@/stores/notes'
import { EnumModalKeys } from '@/constants/EnumModalKeys'

const { form, $v } = useForm()
const { addNewItem } = useNoteStore()

const close = () => {
  closeModal(EnumModalKeys.AddNote)
}
const add = () => {
  if (!checkValidation($v.value)) {
    addNewItem(form.text)
    close()
  }
}

const keyPress = (event: KeyboardEvent) => {
  if (event && event.code === 'Enter' && event.ctrlKey) {
    add()
  }
}
document.addEventListener('keydown', keyPress)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyPress)
})
</script>

<template>
  <app-modal>
    <template v-slot:content>
      <div class="modal-header">
        <h2 class="title-inter">New note</h2>
      </div>
      <div class="modal-body">
        <div class="form-group" :class="getValidationClass($v, 'text')">
          <label for="description">Note description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Add a new Note"
            v-model="form.text"
            @blur="$v.text.$touch()"
          ></textarea>
          <span class="error" v-if="$v.text.required.$invalid">This field must not be empty</span>
        </div>
      </div>
      <div class="modal-footer">
        <div class="button-group">
          <button class="btn btn_outline" @click="close">Cancel</button>
          <button class="btn btn__action" @click="add">Save</button>
        </div>
      </div>
    </template>
  </app-modal>
</template>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  .title-inter {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.button-group {
  display: flex;
  justify-content: flex-end;

  gap: 12px;
  margin-top: 16px;

  .btn {
    width: fit-content;
    padding: 14px 26px;
  }
}
</style>
