import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import loginSlice from "./slices/loginSlice";
import { AppDispatch, RootState } from "./types";
import tasksSlice from "./slices/tasksSlice";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    tasks: tasksSlice,
    users: usersSlice,
  },
});

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
