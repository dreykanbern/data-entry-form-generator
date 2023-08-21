<template>
  <div class="json-form">
    <div class="json-form__editor" ref="editor">
      <vue-jsoneditor
          :mainMenuBar="false"
          :darkTheme="true"
          height="800"
          mode="text"
          v-model:json="jsonData"
      />
    </div>
    <base-button class="json-form__btn" variant="primary" @click="generateForm">Сгенерировать форму</base-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useJsonEditorFormStore } from '@/stores/jsonEditorForm'
import testData from '@/services/testData.json'
import BaseButton from '@/components/UI/BaseButton/BaseButton.vue'
import VueJsoneditor from 'vue3-ts-jsoneditor'

interface JsonDataItem {
  type: string;
  code: string;
  parent: string | null;
  value?: string | number | null;
  listdata?: Array<{ key: number; value: string }>;
}

const store = useJsonEditorFormStore()
const jsonData = ref<JsonDataItem[]>(JSON.parse(localStorage.getItem('jsonData') || JSON.stringify(testData)))

watch(jsonData, () => {
  localStorage.setItem('jsonData', JSON.stringify(jsonData.value))
})

const generateForm = () => {
  try {
    store.setJsonEditorForm(jsonData.value)
  } catch (e) {
    console.error(e)
  }
}
</script>

<style lang="scss" scoped>
@import "./json-editor";
</style>