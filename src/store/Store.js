import { configureStore } from "@reduxjs/toolkit";

import ResourcePlanningReducer from "./ResourcePlanning-Slice";
import AssigningReducer from "./Assigning-Slice";
import UserReducer from "./User-Slice";

const Store = configureStore({
  reducer: {
    resourcePlanning: ResourcePlanningReducer,
    assigning: AssigningReducer,
    user: UserReducer
  },
});

export default Store;
