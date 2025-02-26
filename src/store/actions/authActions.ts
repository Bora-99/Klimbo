import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { IUserData } from "../slices";
import { fetchUsers } from "./userActions";

interface LoginArgs {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<IUserData, LoginArgs>(
  "login",
  async (args: LoginArgs, _thunk) => {
    const response = await _thunk.dispatch(fetchUsers()).unwrap();

    const currentUser = response.find(
      (u) => u.email === args.email && u.password === args.password
    );

    if (currentUser) {
      const generateToken = uuidv4();
      sessionStorage.setItem("token", generateToken);
      const user = {
        username: currentUser.username,
        role: currentUser.role,
        email: currentUser.email,
      };
      sessionStorage.setItem("user", JSON.stringify(user));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${generateToken}`;

      return {
        ...user,
      };
    } else {
      throw Error("user not found");
    }
  }
);

export const logout = (): void => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("i18nextLng");
  delete axios.defaults.headers.common["Authorization"];
};
