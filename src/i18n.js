import { createI18n } from 'vue-i18n'
import zhTW from './locales/zh-TW.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW', // 預設語言
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zhTW,
    en: en
  }
})

export default i18n