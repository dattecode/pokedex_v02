import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
  name:"trainer",
  initialState:{
    name:""
  },
  reducers:{
    loginTrainer:(state, action) => {
      const newName = action.payload
      state.name = newName
    }
  }
})

export const {loginTrainer} = trainerSlice.actions

export default trainerSlice.reducer
