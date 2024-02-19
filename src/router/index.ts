import { createRouter, createWebHistory, type Router } from 'vue-router'
import type { App } from 'vue'

import routes from '@/router/routes'
import routerGuard from '@/router/guard'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})

const checkedRouter: Router = routerGuard(router)

export function setupRouter(app: App<Element>): void {
  app.use(checkedRouter)
}
