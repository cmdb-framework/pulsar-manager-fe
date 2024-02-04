import { defineStore } from 'pinia'
import { store } from '@/stores'

interface BaseState {
  pulsarInstance: {
    instanceId: string | number | null
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
      instanceId: null
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
    }
  }
})


export function useBaseStoreWithOut() {
  return useBaseStore(store)
}
