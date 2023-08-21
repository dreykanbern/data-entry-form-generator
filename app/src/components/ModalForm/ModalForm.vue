<template>
  <div class="modal-form">
    <div class="modal-form__container">
      <component
          v-for="item in jsonData"
          :key="item.code"
          :is="getComponentType(item.type)"
          v-bind="item"
      />
    </div>
    <base-button class="modal-form__btn" variant="primary" @click="generateData">Сгенерировать данные</base-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useJsonEditorFormStore } from '@/stores/jsonEditorForm'
import BaseButton from '@/components/UI/BaseButton/BaseButton.vue'
import Container from './Container.vue'
import Input from './Input.vue'
import Datepicker from './Datepicker.vue'
import List from './List.vue'

const store = useJsonEditorFormStore()
const jsonData = computed(() => store.jsonEditorForm)

const components = {
  container: Container,
  input: Input,
  datepicker: Datepicker,
  list: List
}

const getComponentType = (type: string) => {
  return components[type] || 'div'
}

const generateData = () => {
  const data = jsonData.value.map(item => ({ code: item.code, value: item.value }))
  console.log(data)
}
</script>

<style lang="scss" scoped>
@import "./modal-form";
</style>