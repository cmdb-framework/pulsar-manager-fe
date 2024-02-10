import type { LocationQueryValue, Router } from 'vue-router'
import { useBaseStoreWithOut } from '@/stores/module/base'

const baseStore = useBaseStoreWithOut()
const pulsarInstance = baseStore.pulsarInstance
const routerGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const instance: string | null | LocationQueryValue[] = to.query.instance
    if (instance) {
      pulsarInstance.instanceId = instance as string
    }
    next()
  })
  return router
}

export default routerGuard
