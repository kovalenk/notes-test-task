<script lang="ts" setup>
import { useNoteStore } from '@/stores/notes'
import { checkValidation, getValidationClass } from '@/composables/validation'
import { useForm } from '@/composables/noteForm'
import { useRoute } from 'vue-router'
import router from '@/router'

const { form, $v } = useForm()
const { data, findIndex, editRow } = useNoteStore()
const route = useRoute()
const index = findIndex(route.params.id as string)
if (index !== -1) {
  form.text = data.list[index].text
}

const save = () => {
  if (!checkValidation($v.value)) {
    editRow({ index, text: form.text })
    router.push(`/home`)
  }
}
</script>

<template>
  <div class="main-view">
    <h2 class="title-inter">Edit Note</h2>
    <div class="edit-section">
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
      <div class="button-group">
        <button class="btn btn__action" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.edit-section {
  margin: 30px 0;

  .form-group {
    label {
      font-size: 18px;
      line-height: 26px;
      font-weight: 500;
      color: var(--black);
    }

    textarea {
      min-height: 162px;
    }
  }

  .button-group {
    margin-top: 12px;
  }
}
</style>
