import { createSlice } from "@reduxjs/toolkit";

const initState = {
  num: 0,
};

const counterStore = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    /* up부분이 실행부분? 실행문? */
    up: (state, actions) => {
      console.log("update");
      console.log(actions);
      state.num = state.num + actions.payload;
      //   state.num = state.num + actions.payload
    },
    down: (state, actions) => {
      console.log("down");
      console.log(actions);
      state.num = state.num - actions.payload;
    },
  },
});

export default counterStore;
export const { up, down } = counterStore.actions;
