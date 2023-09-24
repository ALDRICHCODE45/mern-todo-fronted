import { AppDispatch } from "../store";
import { createTodo, deleteTodo } from "./todosSlice";

export const startCreateTodo =
  ({ name }: { name: string }) =>
  (dispatch: AppDispatch) => {
    const data = {
      name,
      done: false,
    };
    dispatch(createTodo(data));
  };

export const startDeletingTodo = (id: number) => (dispatch: AppDispatch) => {
  dispatch(deleteTodo(id));
};
