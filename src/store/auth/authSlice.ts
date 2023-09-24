import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserFieldsCreateUser {
  name: string;
  email: string;
  password: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authenticated", // 'checking' | 'authenticated'
    email: "",
    password: "",
    displayName: "",
    errorMessage: "",
  },
  reducers: {
    login: (state, { payload }: PayloadAction<UserFieldsCreateUser>) => {
      state.status = "authenticated";
      state.displayName = payload.name;
      state.email = payload.email;
      state.password = payload.password;
    },
    logOut: (state) => {
      state.status = "no-authenticated";
      state.displayName = "";
      state.email = "";
      state.password = "";
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, checkingCredentials, logOut } = authSlice.actions;
