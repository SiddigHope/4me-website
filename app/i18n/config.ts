import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './translations/en.json'
import arTranslations from './translations/ar.json'

const i18n = createInstance()

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n