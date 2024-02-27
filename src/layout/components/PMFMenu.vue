<script setup lang="ts">
import { type RouteRecordRaw, useRouter } from 'vue-router'

const props = defineProps({
  routes: {
    type: Array as () => RouteRecordRaw[],
    required: true
  }
})

const router = useRouter()
const handleMenuClick = async (route: RouteRecordRaw) => {
  await router.push({ name: route.name })
}
</script>

<template>
  <t-menu-item v-for="route in props.routes" :key="route.name" :name="route.name" @click="() => handleMenuClick(route)">
    <template #icon>
      <t-icon :name="route.meta?.icon" />
    </template>
    <template #default>
      {{route.meta?.title}}
    </template>
  </t-menu-item>
</template>
