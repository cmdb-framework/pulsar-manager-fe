import { defineComponent } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    routes: {
      type: Array as () => RouteRecordRaw[],
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const handleMenuClick = (route: RouteRecordRaw) => {
      router.push({ name: route.name }).then((r) => console.log(r))
    }
    return () =>
      props.routes.map((route: RouteRecordRaw) => (
        <t-menu-item key={route.name} value={route.name} onClick={() => handleMenuClick(route)}>
          {{
            icon: () => <t-icon name={route.meta?.icon} />,
            default: () => route.meta?.title
          }}
        </t-menu-item>
      ))
  }
})
