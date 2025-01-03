import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions";

export interface IUserData {
  username: string;
  role: "admin" | "user";
  email: string;
}

export interface ILoginData {
  user: IUserData;
  token?: string;
}

const initialState: ILoginData = {
  user: {
    username: "",
    role: "user",
    email: "",
  },
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default loginSlice.reducer;
