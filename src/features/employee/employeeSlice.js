import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
  name: 'employee',
  initialState: [],
  reducers: {
    addEmployee: (currentState, { payload }) => {
      currentState.push(payload)
    },
  },
})

export default employeeSlice
