import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterStore.reducer,
  },
});

export default store;
