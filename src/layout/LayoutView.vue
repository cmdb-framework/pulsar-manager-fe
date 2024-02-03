<script lang="ts" setup>
import PMFHeader from '@/layout/components/PMFHeader.vue'
import { RouterView } from 'vue-router'
import NoSelected from '@/views/no_selected/NoSelectedView.vue'
import PMFFooter from '@/layout/components/PMFFooter.vue'
import PMFAside from '@/layout/components/PMFAside.vue'
</script>

<template>
  <t-layout class="full">
    <t-header><PMFHeader /></t-header>
    <t-layout>
      <t-aside><PMFAside /></t-aside>
      <t-layout>
        <t-content class="tContentBase">
          <RouterView>
            <NoSelected />
          </RouterView>
        </t-content>
        <t-footer style="padding: 0;height: 24px;background-color: white;">
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
