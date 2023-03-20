import { createSlice } from "@reduxjs/toolkit";

const riseSetValues = createSlice({
  name: "riseSetValues",
  initialState: {
    sun: null,
    moon: null,
  },
  reducers: {
    setRiseSetValues: (state, action) => {
      state.moon = action.payload.moon;
      state.sun = action.payload.sun;
    },
  },
});

export const { setRiseSetValues } = riseSetValues.actions;
export default riseSetValues;
