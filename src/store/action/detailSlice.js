import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailMedications = createAsyncThunk("medications/getDetailMedications", async (id) => {
  const response = await axios.get(`https://private-08786a-mymed.apiary-mock.com/v1/medications/${id}`);
  return response.data;
});

const detailMedicationsSlice = createSlice({
  name: "detailMedications",
  initialState: {
    detailMedications: [],
    loading: false,
  },
  extraReducers: {
    [getDetailMedications.pending]: (state, action) => {
      state.loading = true;
    },
    [getDetailMedications.fulfilled]: (state, action) => {
      state.loading = false;
      state.detailMedications = action.payload;
    },
    [getDetailMedications.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default detailMedicationsSlice.reducer;
