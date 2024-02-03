import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', () => {
  const pulsarInstance = {
    instanceId: ref(''),
    setInstanceId: (id: string) => {
      pulsarInstance.instanceId.value = id
    }
  }
  return { pulsarInstance }
})
