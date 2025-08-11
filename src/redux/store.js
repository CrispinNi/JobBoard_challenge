import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../redux/slices/jobSlice";
import authReducer from "../redux/slices/authSlice";


const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    auth: authReducer,
    
  },
});

export default store;
