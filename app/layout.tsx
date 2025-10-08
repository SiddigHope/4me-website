'use client'

// import 'globals.css'
import '../src/app/globals.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import { Noto_Kufi_Arabic } from "next/font/google";
import { AlertProvider } from './components/AlertProvider'
import { ChakraProvider } from '@chakra-ui/react'

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider>
          <LayoutContent>
            <AlertProvider>
              {children}
            </AlertProvider>
          </LayoutContent>
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  )
}

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi",
  weight: ["100", "200", "300", "400", "500", "700", "800"],
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const direction = useSelector((state: RootState) => state.language.direction)
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  
  // Set language based on current language state
  const htmlLang = currentLanguage === 'ar' ? 'ar' : 'en';
  
  return (
    <html lang={htmlLang} dir={direction}>
      <head>
        {/* Primary Meta Tags */}
        <title>4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء</title>
        <meta name="title" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء" />
        <meta name="description" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر. خدمة سريعة وسهلة في تطبيق واحد." />
        <meta name="keywords" content="فورمي, 4me, طلب طعام, توصيل طعام, تسوق عبر التطبيق, حجز موعد طبيب, تطبيق توصيل, انضم كسائق, متجر الكتروني, مطاعم قريبة, دليفري, خدمة التوصيل" />
        
        {/* favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4me.sa/" />
        <meta property="og:title" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء" />
        <meta property="og:description" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر. خدمة سريعة وسهلة في تطبيق واحد." />
        <meta property="og:image" content="https://4me.sa/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://4me.sa/" />
        <meta property="twitter:title" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والتسوق وحجز مواعيد الأطباء" />
        <meta property="twitter:description" content="4me (فورمي) - تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر." />
        <meta property="twitter:image" content="https://4me.sa/images/twitter-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://4me.sa" />
        
        {/* Alternate Languages for SEO */}
        {/* <link rel="alternate" hreflang="ar" href="https://4me.sa" />
        <link rel="alternate" hreflang="en" href="https://4me.sa" />
        <link rel="alternate" hreflang="x-default" href="https://4me.sa" /> */}
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "4me (فورمي)",
              "applicationCategory": "FoodDeliveryApplication",
              "operatingSystem": "Android, iOS",
              "description": "تطبيق شامل للطلب من المطاعم والمتاجر، حجز مواعيد الأطباء، وانضم كسائق أو متجر.",
              "keywords": "فورمي, 4me, طلب طعام, توصيل طعام, تسوق, حجز موعد طبيب, تطبيق توصيل",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "SAR"
              }
            })
          }}
        />
      </head>
      <body className={`${notoKufi.variable} antialiased`}>
        <div className={`min-h-screen ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout