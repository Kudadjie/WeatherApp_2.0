import { createSlice } from "@reduxjs/toolkit";

const isDay = createSlice({
  name: "isDay",
  initialState: { value: null },
  reducers: {
    // subject to change after data fetching is built
    setDay: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { setDay } = isDay.actions;
export default isDay;
