import type { RouteRecordRaw } from 'vue-router'
import setting_routes from '@/router/routes/setting_routes'
import instance_routes from '@/router/routes/instance_routes'

const routes_enum = (routingPrefix: string): RouteRecordRaw[] => {
  routingPrefix.startsWith('/settings') ? (routingPrefix = '/settings') : (routingPrefix = '/views')
  switch (routingPrefix) {
    case '/settings':
      return setting_routes
    default:
      return instance_routes
  }
}

export default routes_enum
