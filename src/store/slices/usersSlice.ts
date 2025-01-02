import { createSlice } from "@reduxjs/toolkit";
import { IUserTypes } from "../../types/user";
import { fetchUsers } from "../actions/userActions";

export interface IUsersData {
  users: IUserTypes[];
}

const initialState: IUsersData = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
