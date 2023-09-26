import { AppDispatch } from "../store";
import {
  createTodo,
  deleteTodo,
  updateNote,
  updateTodoDone,
} from "./todosSlice";

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

export const startUpdatingNote =
  (id: number, name: string) => (dispatch: AppDispatch) => {
    dispatch(updateNote({ id, name }));
  };

export const startchanginTodoDone =
  (id: number, done: boolean) => (dispatch: AppDispatch) => {
    const data = {
      id,
      done,
    };
    dispatch(updateTodoDone(data));
  };
