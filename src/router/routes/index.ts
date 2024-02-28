import type { RouteRecordRaw } from 'vue-router'
import instance_routes from '@/router/routes/instance_routes'
import setting_routes from '@/router/routes/setting_routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/LayoutView.vue'),
    redirect: '/welcome',
    children: [
      {
        path:'/welcome',
        name: 'Welcome',
        component: () => import('@/views/no_selected/NoSelectedView.vue'),
        meta: {
          title: 'Welcome'
        }
      },
      {
        path: '/instance/:id',
        name: 'Views',
        component: () => import('@/layout/SubLayoutView.vue'),
        redirect: '/instance/:id/dashboard',
        children: instance_routes
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/layout/SubLayoutView.vue'),
        redirect: '/settings/instance',
        children: setting_routes
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginView.vue')
  }
]

export default routes
