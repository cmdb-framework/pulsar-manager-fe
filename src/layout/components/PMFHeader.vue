<script setup lang="ts">
import { LogoutIcon, RollbackIcon, SettingIcon } from 'tdesign-icons-vue-next'
import { useBaseStoreWithOut } from '@/stores/module/base'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const baseStore = useBaseStoreWithOut()
const pulsarInstance = baseStore.pulsarInstance
const router = useRouter()

onMounted((): void => {
  baseStore.loadInstanceList()
  pulsarInstance.instanceId = router.currentRoute.value.params.id as string
})
</script>

<template>
  <div class="pmf-header">
    <div class="pmf-header__title">
      <h1>PulsarManager</h1>
    </div>
    <div class="pmf-header__content">
      <t-select
        v-model="pulsarInstance.instanceId"
        :filterable="true"
        :clearable="true"
        style="width: 300px"
        :showArrow="true"
        @change="router.push({name: 'Dashboard',params: {id: pulsarInstance.instanceId}})"
      >
        <t-option
          v-for="(v, k) in pulsarInstance.instanceList"
          :key="k"
          :label="v.instance_name"
          :value="v.instance_id"
        />
      </t-select>
      <t-space class="pmf-header__actions">
        <t-button
          variant="outline"
          theme="primary"
          v-if="router.currentRoute.value.fullPath.startsWith('/settings')"
          @click="() => router.back()"
        >
          <template #icon>
            <RollbackIcon />
          </template>
          返回
        </t-button>
        <t-button
          variant="outline"
          theme="primary"
          v-else
          @click="() => router.push({ path: '/settings' })"
        >
          <template #icon>
            <SettingIcon />
          </template>
          设置
        </t-button>

        <t-button variant="outline" theme="danger">
          <template #icon>
            <LogoutIcon />
          </template>
          退出
        </t-button>
      </t-space>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pmf-header {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  .pmf-header__title {
    width: 232px;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }
  }

  .pmf-header__content {
    width: calc(100% - 232px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>
