import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const pulsarInstance = {
    instanceId: ref<string | number>(''),
    setInstanceId: (id: string): void => {
      pulsarInstance.instanceId.value = id
    }
  }
  const menuStatus = {
    isCollapsed: ref<boolean>(false),
    currentMenu: ref<string | number>(''),
    toggleCollapsed: (): void => {
      menuStatus.isCollapsed.value = !menuStatus.isCollapsed.value
    }
  }
  return { pulsarInstance, menuStatus }
})
