import type { RouteRecordRaw } from 'vue-router'

const instance_routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/DashboardView.vue'),
    meta: {
      title: '看板',
      icon: 'dashboard'
    }
  },
  {
    path: '/namespace',
    name: 'Namespace',
    component: () => import('@/views/namespace/NameSpaceView.vue'),
    meta: {
      title: '命名空间',
      icon: 'menu-application'
    }
  },
  {
    path: '/tenant',
    name: 'Tenant',
    component: () => import('@/views/tenant/TenantView.vue'),
    meta: {
      title: '租户',
      icon: 'user'
    }
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('@/views/topic/TopicView.vue'),
    meta: {
      title: '主题',
      icon: 'animation'
    }
  },
  {
    path: '/consumer',
    name: 'Consumer',
    component: () => import('@/views/consumer/ConsumerView.vue'),
    meta: {
      title: '消费者',
      icon: 'round'
    }
  }
]

export default instance_routes
