import {createSlice} from "@reduxjs/toolkit";

const lastUpdated = createSlice({
  name : "lastUpdated",
  initialState : {
    value : null,
  },
  reducers : {
    updateLastUpdated :
        (state, action) => { state.value = action.payload.time; },
  },
});

export const {updateLastUpdated} = lastUpdated.actions;
export default lastUpdated;
