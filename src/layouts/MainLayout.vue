<template>
  <header-component></header-component>
  <router-view></router-view>
  <add-note v-if="modalKeys[EnumModalKeys.AddNote]"></add-note>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { modalKeys } from '@/composables/modalActions'
import AddNote from '@/modals/AddNote.vue'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
</script>
