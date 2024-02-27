<script setup lang="ts">
import { useBaseStoreWithOut } from '@/stores/module/base'
import { type RouteRecordRaw, useRouter } from 'vue-router'
import routes_enum from '@/router/routes/routes_enum'
import { computed } from 'vue'
const baseStore = useBaseStoreWithOut()
const router = useRouter()

const routes = computed(() => {
  return routes_enum(router.currentRoute.value.fullPath)
})
const handleMenuClick = async (route: RouteRecordRaw) => {
  await router.push({ name: route.name })
}
</script>

<template>
  <t-menu theme="light" height="550px" :collapsed="baseStore.getMenuStatus.isCollapsed">
    <t-menu-item
      v-for="(v, k) in routes"
      :key="k"
      :name="v.name"
      :value="v.name"
      @click="() => handleMenuClick(v)"
    >
      <template #icon>
        <t-icon :name="v.meta?.icon" />
      </template>
      {{ v.meta?.title }}
    </t-menu-item>
    <template #operations>
      <t-button variant="text" shape="square" @click="baseStore.toggleCollapsed">
        <template #icon><t-icon name="view-list" /></template>
      </t-button>
    </template>
  </t-menu>
</template>

<style scoped lang="scss"></style>
