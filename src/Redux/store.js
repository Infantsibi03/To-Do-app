import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice.js";
const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
