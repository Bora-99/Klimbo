import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../constants";
import { TaskTypes } from "../../types/task";

export const fetchTasks = createAsyncThunk("fetchTasks", async (_, _thunk) => {
  const response = await fetch(`${API}/tasks`);
  const data: TaskTypes[] = await response.json();

  return data;
});
