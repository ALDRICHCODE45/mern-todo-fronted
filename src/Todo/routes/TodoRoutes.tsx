import { Navigate, Route, Routes } from "react-router-dom";
import { TodoPage } from "../pages/TodoPage";

export const TodoRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
