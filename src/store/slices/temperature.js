import { createSlice } from "@reduxjs/toolkit";

const temperature = createSlice({
  name: "temperature",
  initialState: {
    c: null,
    f: null,
    defaultUnit: "c",
    currentUnit: null,
  },
  reducers: {
    setTempUnit: (state, action) => {
      state.currentUnit = action.payload.value;
    },
  },
});

export const { setTempUnit } = temperature.actions;

export default temperature;
