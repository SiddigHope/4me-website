import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LanguageState = {
  currentLanguage: 'en' | 'ar'
  direction: 'ltr' | 'rtl'
}

const initialState: LanguageState = {
  currentLanguage: 'ar',
  direction: 'rtl',
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'ar'>) => {
      state.currentLanguage = action.payload
      state.direction = action.payload === 'ar' ? 'rtl' : 'ltr'
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer