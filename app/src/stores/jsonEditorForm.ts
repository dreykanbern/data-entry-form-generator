import { defineStore } from 'pinia'

interface JsonEditorFormState {
    jsonEditorForm: object[]
}

export const useJsonEditorFormStore = defineStore('jsonEditorForm', {
    state: (): JsonEditorFormState => ({
        jsonEditorForm: []
    }),
    actions: {
        setJsonEditorForm(jsonEditorForm: object[]) {
            this.jsonEditorForm = jsonEditorForm
        }
    }
})