import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from '../features/employee/employeeSlice'
import modalSlice from '../features/modal/modalSlice'

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
    modal: modalSlice.reducer,
  },
})
