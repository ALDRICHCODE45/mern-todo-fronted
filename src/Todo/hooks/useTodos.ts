import { toast } from "sonner";
import TodoApi from "../../api/TodoApi";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  startCreateTodo,
  startDeletingTodo,
  startUpdatingNote,
  startchanginTodoDone,
} from "../../store/todos/thunks";
import { setTodosFromDb } from "../../store/todos/todosSlice";
interface todo {
  name: string;
  _id: number;
  id: number;
  __v: number;
  done?: boolean;
  user: number;
}
export const useTodos = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const { id } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const oncreateTodo = (name: string) => {
    dispatch(startCreateTodo({ name }));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(startDeletingTodo(id));
    toast.success("nota eliminada");
  };

  const onChangeDoneTodo = (id: number, change: boolean) => {
    dispatch(startchanginTodoDone(id, change));
  };

  const onUpdateNote = (id: number, taskNametoUpdate: string) => {
    dispatch(startUpdatingNote(id, taskNametoUpdate));
    toast.success("nota actualizada");
  };

  const checkTodos = async () => {
    try {
      if (id === 0) return;
      const { data } = await TodoApi.get(`/todos/${id}`);
      if (!data.ok) return;
      const newTodos = data.todos.map((todo: todo) => {
        const { name, _id } = todo;
        return { name, id: _id, done: false };
      });

      dispatch(setTodosFromDb(newTodos));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // properties
    todos,
    // methods
    onDeleteTodo,
    onChangeDoneTodo,
    onUpdateNote,
    oncreateTodo,
    checkTodos,
  };
};
