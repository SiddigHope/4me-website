'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Image from 'next/image'
import images from '../../public/images'
import { useAlert } from './AlertProvider'

export default function Hero() {
  const direction = useSelector((state: RootState) => state.language.direction)
  const { t } = useTranslation()
  const showAlert = useAlert()

  return (
    <section
    id="home"
  className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[url('/images/hero-bg.png')] bg-cover rounded-2xl overflow-hidden"
>
  {/* Overlay behind content but above background */}
  <div className="absolute inset-0 bg-[#203260] opacity-40 z-10"></div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center items-center"
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-6 drop-shadow-lg">
          {t("hero.title")}
        </h2>
        <p className="text-md lg:text-lg text-white/80 mb-8 drop-shadow-md lg:px-5 px-8" style={{ lineHeight: 2 }}>
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-center">
          <button
            // href="#"
            onClick={() => showAlert("asd","error")}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#203260] text-white hover:bg-[#2a4277] transition-colors"
          >
            {t("cta.appStore")}
          </button>
          <button
            // href="#"
            onClick={() => showAlert("asd","error")}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FF8242] text-white hover:bg-[#ff956b] transition-colors"
          >
            {t("cta.playStore")}
          </button>
        </div>
      </motion.div>

      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <Image
          src={direction === "rtl" ? images.mockup_right : images.app_mockup}
          alt="App Mockup"
          width={800}
          height={600}
          className="w-full h-auto rounded-3xl"
        />
      </motion.div>

    </div>
  </div>
</section>

  )
}