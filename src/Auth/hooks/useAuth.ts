import TodoApi from "../../api/TodoApi";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { logOut, login } from "../../store/auth/authSlice";
import { startLoginUser, startLogoutUser } from "../../store/auth/thunks";
interface loginUser {
  email: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { displayName } = useAppSelector((state) => state.auth);

  const onLogOut = () => {
    dispatch(startLogoutUser());
    localStorage.clear();
  };

  const loginUser = ({ email, password }: loginUser) => {
    dispatch(startLoginUser({ email, password }));
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(logOut());

    try {
      const { data } = await TodoApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      dispatch(
        login({
          name: data.user.name,
          email: data.user.email,
          password: data.user.password,
          id: data.user._id,
        })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(logOut());
    }
  };

  return {
    //properties
    displayName,
    // methods
    onLogOut,
    checkAuthToken,
    loginUser,
  };
};
