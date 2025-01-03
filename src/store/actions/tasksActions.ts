import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITaskTypes } from "../../types";
import { ApiTasks } from "../../constants/endpoints";

export const fetchTasks = createAsyncThunk("fetchTasks", async (_, _thunk) => {
  const response = await fetch(ApiTasks);
  const data: ITaskTypes[] = await response.json();

  return data;
});

export const postTask = createAsyncThunk(
  "postTask",
  async (task: ITaskTypes, _) => {
    const response = await fetch(ApiTasks, {
      method: "POST",
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    const data: ITaskTypes = await response.json();
    return data;
  }
);

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (taskId: string, _thunk) => {
    const response = await fetch(`${ApiTasks}/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    } else {
      _thunk.dispatch(fetchTasks());
    }
  }
);

export const editTask = createAsyncThunk(
  "editTask",
  async (task: ITaskTypes, _thunk) => {
    const response = await fetch(`${ApiTasks}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    _thunk.dispatch(fetchTasks());
  }
);
