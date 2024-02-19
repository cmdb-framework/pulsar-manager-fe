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
  }
]

export default setting_routes
