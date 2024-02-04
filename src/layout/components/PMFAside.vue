<script setup lang="ts">
import instance_routes from '@/router/routes/instance_routes'
import { useBaseStoreWithOut } from '@/stores/module/base'
import PMFMenu from '@/layout/components/PMFMenu'
const baseStore = useBaseStoreWithOut()
</script>

<template>
  <t-menu
    theme="light"
    default-value="3-2"
    :expand-mutex="true"
    height="550px"
    :collapsed="baseStore.getMenuStatus.isCollapsed"
  >
    <PMFMenu :routes="instance_routes" />
    <template #operations>
      <t-button variant="text" shape="square" @click="baseStore.toggleCollapsed">
        <template #icon><t-icon name="view-list" /></template>
      </t-button>
    </template>
  </t-menu>
</template>

<style scoped lang="scss"></style>
