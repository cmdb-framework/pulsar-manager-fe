import type { RouteRecordRaw } from 'vue-router'

const instance_routes: RouteRecordRaw[] = [
  {
    path: 'namespace',
    name: 'Namespace'
  },
  {
    path: 'tenants',
    name: 'Tenants'
  },
  {
    path: 'topics',
    name: 'Topics'
  },
  {
    path: 'consumers',
    name: 'Consumers'
  }
]

export default instance_routes
