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
  weight: ["100", "200", "300", "400", "500", "700", "800"], // choose the weights you need
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const direction = useSelector((state: RootState) => state.language.direction)

  return (
    <html lang="en" dir={direction}>
      <head>
        <title>4me - Your All-in-One Service App</title>
        <meta name="description" content="Order from stores and restaurants, book doctor appointments - all in one place" />
        <meta property="og:title" content="4me - Your All-in-One Service App" />
        <meta property="og:description" content="Order from stores and restaurants, book doctor appointments - all in one place" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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