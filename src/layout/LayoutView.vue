<script lang="ts" setup>
import PMFHeader from '@/layout/components/PMFHeader.vue'
import PMFAside from '@/layout/components/PMFAside.vue'
import NoSelectedView from '@/views/no_selected/NoSelectedView.vue'
import { useBaseStoreWithOut } from '@/stores/module/base'

const baseStore = useBaseStoreWithOut()
</script>

<template>
  <t-layout class="full">
    <t-header>
      <PMFHeader />
    </t-header>
    <t-layout>
      <RouterView />
    </t-layout>
  </t-layout>
</template>

<style scoped lang="scss"></style>
