import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: { text: '', show: false },
  reducers: {
    showModal: (currentState, { payload }) => {
      console.log(payload)
      currentState.text = payload
      currentState.show = true
    },
    hideModal: (currentState, { payload }) => {
      currentState.text = ''
      currentState.show = false
    },
  },
})

export default modalSlice
