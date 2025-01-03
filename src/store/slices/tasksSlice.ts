import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, postTask } from "../actions";
import { ITaskTypes } from "../../types";

export interface ITasksData {
  tasks: ITaskTypes[];
}

const initialState: ITasksData = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(postTask.fulfilled, (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    });
  },
});

export default tasksSlice.reducer;
