import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'
import '@/assets/base.scss'
import App from '@/App'
import { setupRouter } from './router'
import { setupStore } from '@/stores'


function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  app.use(TDesign).mount('#app')
}

bootstrap()

