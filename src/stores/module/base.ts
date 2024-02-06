import { defineStore } from 'pinia'
import { store } from '@/stores'
import { addInstance, getInstanceList } from '@/api/sys'
import type { instanceDataType } from '@/views/settings/schema'

interface BaseState {
  pulsarInstance: {
    instanceId: string | number | null
    instanceList: any[]
  }
  menuStatus: {
    isCollapsed: boolean
    currentMenu: string | number
  }
}

const useBaseStore = defineStore({
  id: 'base',
  state: (): BaseState => ({
    pulsarInstance: {
      instanceId: null,
      instanceList: []
    },
    menuStatus: {
      isCollapsed: false,
      currentMenu: ''
    }
  }),
  getters: {
    getInstanceId(state): string | number | null {
      return state.pulsarInstance.instanceId
    },
    getMenuStatus(state): { isCollapsed: boolean; currentMenu: string | number } {
      return state.menuStatus
    }
  },
  actions: {
    toggleCollapsed(): void {
      this.menuStatus.isCollapsed = !this.menuStatus.isCollapsed
    },
    async loadInstanceList(): Promise<any> {
      const result = await getInstanceList()
      this.pulsarInstance.instanceList = result.data
    },
    async createInstance(data: instanceDataType): Promise<any> {
      await addInstance(data)
    }
  }
})

export function useBaseStoreWithOut() {
  return useBaseStore(store)
}
