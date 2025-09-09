'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useAlert } from './AlertProvider'

export default function Footer() {
  const showAlert = useAlert()
  const { t } = useTranslation()

  const footerLinks = [
    { text: t('footer.privacy'), href: '/privacy' },
    { text: t('footer.terms'), href: '/terms' },
    { text: t('footer.support'), href: 'mailto:support@4me.sa' }
  ]

  return (
    <footer className="bg-[#203260] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl font-bold mb-4 lg:mb-12">4ME</h2>
            <p className="text-gray-300 text-sm">
              {t('footer.rights')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('footer.download')}</h3>
            <div className="space-y-2">
              <button onClick={() => showAlert("error","error")} className="block text-gray-300 hover:text-white transition-colors">
                {t('footer.appStore')}
              </button>
              <button onClick={() => showAlert("error","error")} className="block text-gray-300 hover:text-white transition-colors">
                {t('footer.playStore')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('footer.legal')}</h3>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => showAlert("error","error")}
                  // href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.text}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-2 text-gray-300">
              <p>support@4me.app</p>
              <p>+966 59-5995566</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}