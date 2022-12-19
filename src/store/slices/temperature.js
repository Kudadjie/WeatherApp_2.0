import { createSlice } from "@reduxjs/toolkit";

const temperature = createSlice({
  name: "temperature",
  initialState: {
    c: null,
    f: null,
    defaultUnit: "c",
  },
  reducers: {
    setTempUnit: (state, action) => {
      state.currentUnit = action.payload.value;
    },
    setTempValues: (state, action) => {
      state.c = action.payload.c;
      state.f = action.payload.f;
    },
  },
});

export const { setTempUnit, setTempValues } = temperature.actions;

export default temperature;
