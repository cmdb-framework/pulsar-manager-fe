import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import routerGuard from '@/router/guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})

const checkedRouter = routerGuard(router)

export default checkedRouter
