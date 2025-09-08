'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../store/features/languageSlice'
import { RootState } from '../store/store'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import images from '../../public/images'
import Navbar from './Navbar'

export default function Header() {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'ar' : 'en'
    dispatch(setLanguage(newLang))
    i18n.changeLanguage(newLang)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full bg-[#203260] text-white hover:bg-[#2a4277] transition-colors"
          >
            {currentLanguage === 'en' ? 'العربية' : 'English'}
          </motion.button> */}

            {/* navbar icon when on mobile or small screen */}
          {/* <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}

          {/* navbar list [home, features, about, partners] */}

          {/* <nav>
            <ul className="hidden md:flex space-x-8">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="#features" className="text-gray-700 hover:text-gray-900">
                  Features
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="#about" className="text-gray-700 hover:text-gray-900">
                  About
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#partners" className="text-gray-700 hover:text-gray-900">
                  Partners
                </a>
              </motion.li>
            </ul>
          </nav> */}

          <Navbar />

          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={images.logo} alt="4me Logo" className="h-8 w-auto" />
          </motion.div> */}
        </div>
      </div>
    </header>
  )
}