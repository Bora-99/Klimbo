import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../constants";
import { IUserTypes } from "../../types/user";

export const fetchUsers = createAsyncThunk("fetchUsers", async (_, _thunk) => {
  const response = await fetch(`${API}/users`);
  const data: IUserTypes[] = await response.json();
  return data;
});
