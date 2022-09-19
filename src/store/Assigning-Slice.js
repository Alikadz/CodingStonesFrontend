import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpened: false,
  employeeId: null,
  percentage: 100,
  isAssigned: false,
};

const AssigningSlice = createSlice({
  name: "assigning",
  initialState,
  reducers: {
    openModal(state, action) {
      state.isModalOpened = !state.isModalOpened;
      state.employeeId = action.payload.employeeId;
    },
    closeModal(state, action) {
      state.isModalOpened = !state.isModalOpened;
    },
    setPercentage(state, action) {
      state.percentage = action.payload.percentage;
    },
    setIsAssigned(state) {
      state.isAssigned = !state.isAssigned;
    },
  },
});

export const assigningActions = AssigningSlice.actions;
export default AssigningSlice.reducer;
