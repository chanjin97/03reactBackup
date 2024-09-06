import { configureStore } from "@reduxjs/toolkit";
import counterStore from "../slice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});

export default store;
