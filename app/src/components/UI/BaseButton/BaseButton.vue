<template>
  <button :class="buttonClass" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const emits = defineEmits(['click'])

const onClick = () => {
  emits('click')
}

const buttonClass = `btn btn-${props.variant}`
</script>

<style lang="scss" scoped>
@import "base-button";
</style>
