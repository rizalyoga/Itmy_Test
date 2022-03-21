import { configureStore } from "@reduxjs/toolkit";
import medicationsReducer from "../action/medicationSlice";
import detailMedicationsReducer from "../action/detailSlice";
import showModalReducer from "../action/showModal";

export const store = configureStore({
  reducer: {
    medications: medicationsReducer,
    detailMedications: detailMedicationsReducer,
    isVisible: showModalReducer,
  },
});

export default store;
