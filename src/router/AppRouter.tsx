/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom";
import { TodoRoutes } from "../Todo/routes/TodoRoutes";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { useAppSelector } from "../hooks/store";
import { useAuth } from "../Auth/hooks/useAuth";
import { useEffect } from "react";
import { useTodos } from "../Todo/hooks/useTodos";

export const AppRouter = () => {
  const { status } = useAppSelector((state) => state.auth);
  const { checkTodos } = useTodos();
  const { checkAuthToken } = useAuth();

  const changestatusAuthenticated = status === "authenticated";

  useEffect(() => {
    checkAuthToken();
  }, []);

  useEffect(() => {
    checkTodos();
  }, [changestatusAuthenticated]);

  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<TodoRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  );
};
