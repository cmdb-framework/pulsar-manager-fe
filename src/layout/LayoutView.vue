<script lang="ts" setup>
import PMFHeader from '@/layout/components/PMFHeader.vue'
import PMFFooter from '@/layout/components/PMFFooter.vue'
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
    <t-layout v-if="baseStore.pulsarInstance.instanceId === null">
      <t-content>
        <NoSelectedView  />
      </t-content>
    </t-layout>
    <t-layout v-else>
      <t-aside width="auto">
        <PMFAside />
      </t-aside>
      <t-layout>
        <t-content class="tContentBase">
          <RouterView />
        </t-content>
        <t-footer style="padding: 0; height: 24px; background-color: white">
          <PMFFooter />
        </t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>

<style scoped lang="scss">
.tContentBase {
  padding: 1rem;
  // background-color: antiquewhite;
}
</style>
