<script setup lang="ts">
import { useBaseStoreWithOut } from '@/stores/module/base'
const pulsarInstance = useBaseStoreWithOut().pulsarInstance

</script>

<template>
  {{ pulsarInstance.instanceId }}
</template>

<style scoped lang="scss"></style>
