import { createSlice } from "@reduxjs/toolkit";

const initState = {
  num: 0,
};

const counterStore = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    up: (state, actions) => {},
  },
});

export default counterStore;
