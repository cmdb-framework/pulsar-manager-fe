<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps({
  instanceId: {
    type: String,
    required: true
  }
})

watch(
  () => props.instanceId,
  (n, o) => {
    console.log(n, o)
  },
  { immediate: true }
)
</script>

<template>
  {{ props.instanceId }}
</template>

<style scoped lang="scss"></style>
