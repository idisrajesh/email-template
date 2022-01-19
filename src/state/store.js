import { configureStore } from '@reduxjs/toolkit'
import templateSlice from './templateSlice'
import viewSlice from './viewSlice'
export const store = configureStore({
  reducer: {
    template:templateSlice,
    view:viewSlice
  },
})