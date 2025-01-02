import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "../actions";
import { TaskTypes } from "../../types/task";

export interface ITasksData {
  tasks: TaskTypes[];
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
  },
});

export default tasksSlice.reducer;
