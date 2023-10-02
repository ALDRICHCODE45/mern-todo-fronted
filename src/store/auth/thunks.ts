import TodoApi from "../../api/TodoApi";
import { AppDispatch } from "../store";
import { cleanTodos } from "../todos/todosSlice";
import {
  checkingCredentials,
  logOut,
  login,
  setErrorMessage,
} from "./authSlice";
interface CreateUserEmailAndPassword {
  name: string;
  email: string;
  password: string;
}
interface LoginUser {
  email: string;
  password: string;
}

export const startCreateUserWithEmailAndPassword =
  ({ name, email, password }: CreateUserEmailAndPassword) =>
  async (dispatch: AppDispatch) => {
    try {
      const { data } = await TodoApi.post("/auth", { email, password, name });
      localStorage.setItem("token", data.token);
      dispatch(checkingCredentials());
      const user = {
        name,
        email,
        password,
        id: data.user._id,
      };
      dispatch(login(user));
    } catch (error) {
      console.log(error);
      // dispatch(setErrorMessage())
    }
  };

export const startLoginUser =
  ({ email, password }: LoginUser) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(checkingCredentials());
      const { data } = await TodoApi.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      const user = {
        name: data.name,
        email,
        password,
        id: data.id,
      };
      dispatch(login(user));
    } catch (error) {
      dispatch(setErrorMessage(error.response.data.msg));
    }
  };

export const startLogoutUser = () => (dispatch: AppDispatch) => {
  dispatch(checkingCredentials());
  dispatch(logOut());
  dispatch(cleanTodos());
};
