import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedications = createAsyncThunk("medications/getMedications", async () => {
  const response = await axios.get("https://private-08786a-mymed.apiary-mock.com/v1/medications");
  return response.data;
});

const medicationsSlice = createSlice({
  name: "medications",
  initialState: {
    medications: [],
    loading: false,
  },
  extraReducers: {
    [getMedications.pending]: (state, action) => {
      state.loading = true;
    },
    [getMedications.fulfilled]: (state, action) => {
      state.loading = false;
      state.medications = action.payload;
    },
    [getMedications.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default medicationsSlice.reducer;
