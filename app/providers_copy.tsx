'use client'

import { Provider } from 'react-redux'
import { store } from './store/store'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/config'
import { ChakraProvider } from '@chakra-ui/react'
import { AlertProvider } from './components/AlertProvider'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

export default function Providers({ children }: { children: React.ReactNode }) {
  const direction = useSelector((state: RootState) => state.language.direction)
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  )

  // Optional: dynamically apply direction class to body
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider>
          <AlertProvider>
            <div
              dir={direction}
              lang={currentLanguage}
              className={direction === 'rtl' ? 'text-right' : 'text-left'}
            >
              {children}
            </div>
          </AlertProvider>
        </ChakraProvider>
      </I18nextProvider>
    </Provider>
  )
}
