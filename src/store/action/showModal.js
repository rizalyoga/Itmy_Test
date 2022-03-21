import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const showModal = createSlice({
  name: "isVisible",
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, changeValue } = showModal.actions;

export default showModal.reducer;
