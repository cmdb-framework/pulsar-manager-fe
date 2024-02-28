<script setup lang="ts">
import TenantNamespace from '@/views/detail/components/TenantNamespace.vue'
import { useRouter } from 'vue-router'
import { syncTN } from '@/api/sync'
import { useBaseStoreWithOut } from '@/stores/module/base'
const baseStore = useBaseStoreWithOut()
const router = useRouter()

</script>

<template>
  <div class="full flex-base">
    <t-card :bordered="false" :shadow="true" class="TNTree">
      <template #header>
        <t-button
          @click="syncTN(baseStore.pulsarInstance.instanceId)"
          theme="primary"
          variant="outline"
        >
          <template #icon>
            <t-icon name="refresh" class="freshIcon" />
          </template>
          同步
        </t-button>
      </template>
      <TenantNamespace />
    </t-card>
    <t-card :bordered="false" :shadow="true" style="height: 100%; width: calc(100% - 316px)">
    </t-card>
  </div>
</template>

<style scoped lang="scss">
.TNTree {
  height: 100%;
  width: 300px;
  margin-right: 16px;
}

.freshIcon {
  &:hover {
    transform: rotate(180deg);
    transition: 1s;
  }
}
</style>
