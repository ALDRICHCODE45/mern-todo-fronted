import { AppDispatch } from "../store";
import { checkingCredentials, logOut, login } from "./authSlice";
interface CreateUserEmailAndPassword {
  name: string;
  email: string;
  password: string;
}

export const startCreateUserWithEmailAndPassword =
  ({ name, email, password }: CreateUserEmailAndPassword) =>
  (dispatch: AppDispatch) => {
    dispatch(checkingCredentials());
    dispatch(login({ name, email, password }));
  };

export const startLogoutUser = () => (dispatch: AppDispatch) => {
  dispatch(checkingCredentials());
  dispatch(logOut());
};
