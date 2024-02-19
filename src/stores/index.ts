import type { App } from 'vue'
import { createPinia, type Pinia } from 'pinia'

const store: Pinia = createPinia()

export function setupStore(app: App<Element>): void {
  app.use(store)
}

export { store }
