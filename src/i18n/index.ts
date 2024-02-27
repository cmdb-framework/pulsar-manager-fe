import { createI18n, type I18n, useI18n } from 'vue-i18n'
import i18nLogin from '@/i18n/modules/i18nLogin'
import type { App } from 'vue'
// import i18nSystem from '@/i18n/modules/i18nSystem'

const i18n: I18n = createI18n({
  legacy: false,
  locale: 'zh', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: { ...i18nLogin }
})

export function setupI18N(app: App<Element>) {
  app.use(i18n)
}
