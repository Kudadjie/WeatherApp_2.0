import {createSlice} from "@reduxjs/toolkit";

const changeLocationModal = createSlice({
  name : "changeLocationModal",
  initialState : {
    opened : false,
  },
  reducers : {
    toggleModal : (state) => {
      if (state.opened) {
        state.opened = false;
      } else {
        state.opened = true;
      }
    },
  },
});

export const {toggleModal} = changeLocationModal.actions;

export default changeLocationModal;
