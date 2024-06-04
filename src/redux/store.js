import { configureStore } from '@reduxjs/toolkit'
import dreamySlice from './dreamySlice'

export const store = configureStore({
  reducer: {
      dreamy:dreamySlice,
  },
})