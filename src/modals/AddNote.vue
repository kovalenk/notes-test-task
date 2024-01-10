<script lang="ts" setup>
import { onBeforeUnmount, reactive, ref } from 'vue'

import AppModal from '@/modals/AppModal.vue'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useNoteStore } from '@/stores/check'
import { closeModal } from '@/composables/modalActions'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
import { checkValidation, getValidationClass } from '@/composables/validation'

const form = reactive({
  text: ''
})
const rules = ref({
  text: { required }
})

const store = useNoteStore()
const $v = useVuelidate(rules, form)

const close = () => {
  closeModal(EnumModalKeys.AddNote)
}

const add = () => {
  if (!checkValidation($v.value)) {
    store.addNewItem(form.text)
    // form.text = "";
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

  .form-radio-button {
    display: flex;
    gap: 12px;
  }

  .title-inter {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}

.modal-body {
  .form-group {
    position: relative;

    display: flex;
    flex-direction: column;

    @include media_mobile {
      margin-top: 12px;
    }

    .help-message {
      display: flex;
      justify-content: space-between;

      a {
        font-weight: 500;
      }
    }

    label {
      font-family: var(--font-inter);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
      color: var(--grey-content);
      margin-bottom: 8px;

      @include media_mobile {
        font-size: 12px;
        line-height: 18px;
      }
    }

    textarea {
      width: 100%;
      min-height: 102px;
      box-sizing: border-box;
      border: solid 1px var(--grey-line);
      border-radius: 8px;
      padding: 14px 16px;
      position: relative;
      font-family: var(--font-inter);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0;

      @include media_mobile {
        font-size: 14px;
        line-height: 20px;
        height: 48px;
      }

      &::placeholder {
        color: var(--grey-content);
      }
      &:focus {
        outline: none;
      }
    }

    span {
      display: none;
      font-family: var(--font-inter);
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      color: var(--red);
      margin-top: 8px;

      @include media_mobile {
        font-size: 12px;
        line-height: 18px;
      }
    }

    &.error {
      textarea {
        border-color: var(--red);
      }

      span {
        display: block;
      }
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
