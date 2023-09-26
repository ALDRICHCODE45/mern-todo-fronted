import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { startLogoutUser } from "../../store/auth/thunks";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { displayName } = useAppSelector((state) => state.auth);

  const onLogOut = () => {
    dispatch(startLogoutUser());
  };

  return {
    //properties
    displayName,
    // methods
    onLogOut,
  };
};
