<script lang="ts" setup>
import PMFHeader from '@/layout/components/PMFHeader.vue'
</script>

<template>
  <t-layout class="full">
    <t-header><PMFHeader /></t-header>
    <t-layout>
      <t-aside>Aside</t-aside>
      <t-layout>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>
