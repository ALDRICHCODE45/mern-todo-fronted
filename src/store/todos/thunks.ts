import TodoApi from "../../api/TodoApi";
import { AppDispatch } from "../store";
import {
  createTodo,
  deleteTodo,
  updateNote,
  updateTodoDone,
} from "./todosSlice";

export const startCreateTodo =
  ({ name }: { name: string }) =>
  async (dispatch: AppDispatch) => {
    const { data } = await TodoApi.post("/todos/createtodo", { name });

    const todo = {
      name: data.newTodo.name,
      done: false,
      id: data.newTodo.id,
    };
    dispatch(createTodo(todo));
  };

export const startDeletingTodo =
  (id: number) => async (dispatch: AppDispatch) => {
    await TodoApi.delete(`/todos/deleteTodo/${id}`);
    dispatch(deleteTodo(id));
  };

export const startUpdatingNote =
  (id: number, name: string) => async (dispatch: AppDispatch) => {
    await TodoApi.put(`/todos/update/${id}`, { name });
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
