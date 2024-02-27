<script setup lang="ts">
import TenantNamespace from '@/views/detail/components/TenantNamespace.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const syncTree = (id: string | string[]) => {
  console.log(id)
}
</script>

<template>
  <div class="full flex-base">
    <t-card :bordered="false" :shadow="true" class="TNTree">
      <template #header>
        <t-button shape="circle" @click="syncTree(router.currentRoute.value.params.id)">
          <template #icon>
            <t-icon name="refresh" class="freshIcon" />
          </template>
        </t-button>
      </template>
      <TenantNamespace :instanceId="router.currentRoute.value.params.id" />
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
