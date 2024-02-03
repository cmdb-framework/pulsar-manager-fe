import type { Router } from 'vue-router'

const routerGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // Add your logic here
    next()
  })
  return router
}

export default routerGuard
