<script lang="ts" setup>
import { defineProps } from 'vue'

import AppModal from '@/modals/AppModal.vue'

import { closeModal } from '@/composables/modalActions'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
import { useNoteStore } from '@/stores/notes'

const props = defineProps({
  noteId: {
    type: String,
    default: ''
  }
})

const store = useNoteStore()
const close = () => {
  closeModal(EnumModalKeys.DeleteNote)
}

const submit = () => {
  store.removeItem(props.noteId)
  close()
}
</script>

<template>
  <app-modal>
    <template v-slot:content>
      <div class="modal-header">
        <h3 class="title-inter">Delete item</h3>
      </div>
      <div class="modal-body">
        <p class="label-inter size-16">
          Do you want to delete this note: <span>{{ noteId }}</span
          >?
        </p>
      </div>
      <div class="modal-footer">
        <div class="button-group">
          <button class="btn btn_outline" @click="close">Cancel</button>
          <button class="btn btn__action" @click="submit">Submit</button>
        </div>
      </div>
    </template>
  </app-modal>
</template>

<style scoped lang="scss">
.modal-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-body {
  flex: unset;
  margin: 26px 0;

  .label-inter {
    text-align: center;
    font-size: 16px;
    font-weight: 400;

    span {
      font-weight: 600;
    }
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
