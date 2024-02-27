import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
import setting_routes from '@/router/routes/setting_routes'
import instance_routes from '@/router/routes/instance_routes'

const routes_enum = (routeName: RouteRecordName | null | undefined): RouteRecordRaw[] => {
  switch (routeName) {
    case 'Settings':
      return setting_routes
    default:
      return instance_routes
  }
}

export default routes_enum
