import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserFieldsCreateUser {
  name: string;
  email: string;
  password: string;
  id: number;
}
type ErrorMessage = string;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authenticated", // 'checking' | 'authenticated'
    email: "",
    password: "",
    id: 0,
    displayName: "",
    errorMessage: "",
  },
  reducers: {
    login: (state, { payload }: PayloadAction<UserFieldsCreateUser>) => {
      state.status = "authenticated";
      state.displayName = payload.name;
      state.email = payload.email;
      state.password = payload.password;
      state.id = payload.id;
    },
    logOut: (state) => {
      state.status = "no-authenticated";
      state.displayName = "";
      state.email = "";
      state.password = "";
      state.id = 0;
      state.errorMessage = "";
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    setErrorMessage: (state, { payload }: PayloadAction<ErrorMessage>) => {
      state.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, checkingCredentials, logOut, setErrorMessage } =
  authSlice.actions;
