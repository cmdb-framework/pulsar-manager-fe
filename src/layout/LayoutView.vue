<script lang="ts" setup>
import PMFHeader from '@/layout/components/PMFHeader.vue'
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
