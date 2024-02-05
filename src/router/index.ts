import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

import routes from '@/router/routes'
import routerGuard from '@/router/guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})

const checkedRouter = routerGuard(router)

export function setupRouter(app: App<Element>) {
  app.use(checkedRouter)
}
