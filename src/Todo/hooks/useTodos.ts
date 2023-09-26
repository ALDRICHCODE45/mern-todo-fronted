import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  startCreateTodo,
  startDeletingTodo,
  startUpdatingNote,
  startchanginTodoDone,
} from "../../store/todos/thunks";

export const useTodos = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const oncreateTodo = (name: string) => {
    dispatch(startCreateTodo({ name }));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(startDeletingTodo(id));
  };

  const onChangeDoneTodo = (id: number, change: boolean) => {
    dispatch(startchanginTodoDone(id, change));
  };

  const onUpdateNote = (id: number, taskNametoUpdate: string) => {
    dispatch(startUpdatingNote(id, taskNametoUpdate));
  };

  return {
    // properties
    todos,
    // methods
    onDeleteTodo,
    onChangeDoneTodo,
    onUpdateNote,
    oncreateTodo,
  };
};
