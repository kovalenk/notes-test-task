import { reactive, ref } from 'vue'
import { required } from '@vuelidate/validators'
import { useNoteStore } from '@/stores/notes'
import useVuelidate from '@vuelidate/core'

export const useForm = () => {
  const form = reactive({
    text: ''
  })
  const rules = ref({
    text: { required }
  })

  const $v = useVuelidate(rules, form)

  return {
    form,
    $v
  }
}
