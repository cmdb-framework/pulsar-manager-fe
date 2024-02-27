<script setup lang="ts">
import NoSelectedView from '@/views/no_selected/NoSelectedView.vue'
import { useBaseStoreWithOut } from '@/stores/module/base'
const baseStore = useBaseStoreWithOut()
import PMFAside from '@/layout/components/PMFAside.vue'
</script>

<template>
  <t-layout>
    <t-aside width="auto">
      <PMFAside />
    </t-aside>
    <t-layout>
      <t-content v-if="baseStore.pulsarInstance.instanceId === null">
        <NoSelectedView />
      </t-content>
      <t-content class="base-main" v-else>
        <RouterView />
      </t-content>
    </t-layout>
  </t-layout>
</template>

<style scoped lang="scss">
//.inner-layout {
//  background-color: #ececec;
//  border-radius: 10px;
//}
</style>
