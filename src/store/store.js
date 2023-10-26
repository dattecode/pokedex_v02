import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./trainer.slice";

export default configureStore({
  reducer:{
    trainer:trainerSlice
  }
})