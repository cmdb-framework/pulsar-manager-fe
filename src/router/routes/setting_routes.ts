import type { RouteRecordRaw } from 'vue-router'

const setting_routes: RouteRecordRaw[] = [
  {
    path: 'instance',
    name: 'Instance',
    component: () => import('@/views/instance/InstanceView.vue'),
    meta: {
      title: '实例',
      icon: 'instance'
    }
  },
  {
    path: 'user',
    name: 'User',
    component: () => import('@/views/instance/InstanceView.vue'),
    meta: {
      title: '用户',
      icon: 'user'
    }
  }
]

export default setting_routes
