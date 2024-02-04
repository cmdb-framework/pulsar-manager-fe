import type { RouteRecordRaw } from 'vue-router'
import instance_routes from '@/router/routes/instance_routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/LayoutView.vue'),
    children: instance_routes
  }
]

export default routes
