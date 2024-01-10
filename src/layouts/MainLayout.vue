<template>
  <header-component></header-component>
  <router-view></router-view>
  <add-note v-if="currentKey === EnumModalKeys.AddNote"></add-note>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { currentKey } from '@/composables/modalActions'
import { EnumModalKeys } from '@/constants/EnumModalKeys'
import AddNote from '@/modals/AddNote.vue'
</script>
