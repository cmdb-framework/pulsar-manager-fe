import type { RouteRecordRaw } from 'vue-router'
import instance_routes from '@/router/routes/instance_routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layout/LayoutView.vue'),
    redirect: '/views',
    children: [
      {
        path: 'views',
        name: 'Views',
        component: () => import('@/layout/SubLayoutView.vue'),
        children: instance_routes
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/settings/SettingsView.vue'),
        meta: {
          title: '设置',
          icon: 'setting'
        }
      }
    ]
  }
]

export default routes
