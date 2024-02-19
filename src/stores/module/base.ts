import { defineStore } from 'pinia'
import { store } from '@/stores'
import { addInstance, deleteInstance, getInstanceList, modifyInstance } from '@/api/sys'
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
    async load(): Promise<any> {
      const result = await getInstanceList()
      this.pulsarInstance.instanceList = result.data
    },
    async create(data: instanceDataType): Promise<any> {
      await addInstance(data)
    },
    async update(data: instanceDataType, id?: number): Promise<any> {
      await modifyInstance(data, id)
    },
    async delete(id?: number): Promise<any> {
      await deleteInstance(id)
    }
  }
})

export function useBaseStoreWithOut() {
  return useBaseStore(store)
}
