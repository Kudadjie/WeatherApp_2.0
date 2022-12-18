import { createSlice } from "@reduxjs/toolkit";

const riseSetValues = createSlice({
  name: "riseSetValues",
  initialState: {
    sun: null,
    moon: null,
  },
  reducers: {
    setSunRiseSet: (state, action) => {
      state.sun = action.payload.sun.value;
    },
    setMoonRiseSet: (state, action) => {
      state.moon = action.payload.moon.value;
    },
  },
});

export const { setSunRiseSet, setMoonRiseSet } = riseSetValues.actions;
export default riseSetValues;
