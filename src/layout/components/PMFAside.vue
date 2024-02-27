<script setup lang="ts">
import { useBaseStoreWithOut } from '@/stores/module/base'
import { useRouter } from 'vue-router'
import PMFMenu from '@/layout/components/PMFMenu.vue'
import routes_enum from '@/router/routes/routes_enum'
import { computed } from 'vue'
const baseStore = useBaseStoreWithOut()
const router = useRouter()

const routes = computed(() => {
  return routes_enum(router.currentRoute.value.fullPath)
})
</script>

<template>
  <t-menu
    theme="light"
    default-value="3-2"
    :expand-mutex="true"
    height="550px"
    :collapsed="baseStore.getMenuStatus.isCollapsed"
  >
    <PMFMenu :routes="routes" />
    <template #operations>
      <t-button variant="text" shape="square" @click="baseStore.toggleCollapsed">
        <template #icon><t-icon name="view-list" /></template>
      </t-button>
    </template>
  </t-menu>
</template>

<style scoped lang="scss"></style>
