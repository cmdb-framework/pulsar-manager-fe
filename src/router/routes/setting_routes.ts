import type { RouteRecordRaw } from 'vue-router'

const setting_routes: RouteRecordRaw[] = [
  {
    path: 'instance',
    name: 'Instance',
    component: () => import('@/views/instance/InstanceView.vue'),
    meta: {
      title: '实例管理',
      icon: 'server'
    }
  },
  {
    path: 'user',
    name: 'User',
    component: () => import('@/views/user/UserView.vue'),
    meta: {
      title: '用户管理',
      icon: 'user'
    }
  }
]

export default setting_routes
