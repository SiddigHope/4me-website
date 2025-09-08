'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ShoppingBagIcon, BuildingStorefrontIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function About() {
  const { t } = useTranslation()

  const features = [
    {
      icon: ShoppingBagIcon,
      title: t('about.shopping.title'),
      description:
        t('about.shopping.description'),
      image: '/images/store.png'
    },
    {
      icon: BuildingStorefrontIcon,
      title: t('about.restaurant.title'),
      description:
        t('about.restaurant.description'),
      image: '/images/restaurant.png'
    },
    {
      icon: UserIcon,
      title: t('about.appointments.title'),
      description:
        t('about.appointments.description'),
      image: '/images/doctor.png'
    }
  ]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#203260] mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}

              // Mobile: column layout (text above image)
              // Desktop: alternate left/right using flex-row / flex-row-reverse
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Text Section */}
              <div className="flex-1 text-center">
                <feature.icon className="w-12 h-12 text-[#FF8242] mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-[#203260] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mx-auto max-w-md">
                  {feature.description}
                </p>
              </div>

              {/* Image Section */}
              <div className='flex-1'>
                <div className="relative w-full max-w-sm md:max-w-md mx-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}   // good balance for desktop
                    height={400}  // keep aspect ratio close to your image
                    className="w-full rounded-2xl shadow-md"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#FF8242] opacity-30 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}