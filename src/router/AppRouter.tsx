import { Navigate, Route, Routes } from "react-router-dom";
import { TodoRoutes } from "../Todo/routes/TodoRoutes";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { useAppSelector } from "../hooks/store";

export const AppRouter = () => {
  const { status } = useAppSelector((state) => state.auth);
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<TodoRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
