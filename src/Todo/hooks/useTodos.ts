import { useAppDispatch } from "../../hooks/store";
import {
  startDeletingTodo,
  startUpdatingNote,
  startchanginTodoDone,
} from "../../store/todos/thunks";

export const useTodos = () => {
  const dispatch = useAppDispatch();

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
    onDeleteTodo,
    onChangeDoneTodo,
    onUpdateNote,
  };
};
