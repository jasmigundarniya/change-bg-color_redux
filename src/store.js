import { createSlice, configureStore } from "@reduxjs/toolkit";

// create a slice for the counter
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

// export actions and reducer
export const { increment, decrement } = counterSlice.actions;
export default configureStore({
  reducer: counterSlice.reducer,
});