import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isServiceClicked: false,
  isEmployeeClicked: false,
  serviceId: null,
  employeeId: null,
  resourcePlanningPage: false,
};

const ResourcePlanningSlice = createSlice({
  name: "resourcePlanning",
  initialState,
  reducers: {
    matchEmployees(state, action) {
      state.isServiceClicked = !state.isServiceClicked;
      state.serviceId = action.payload.serviceId;
    },
    matchServices(state, action) {
      state.isEmployeeClicked = !state.isEmployeeClicked;
      state.employeeId = action.payload.employeeId;
    },
    setAvatarCircle(state) {
      state.resourcePlanningPage = !state.resourcePlanningPage;
    },
  },
});

export const resourcePlanningActions = ResourcePlanningSlice.actions;
export default ResourcePlanningSlice.reducer;
