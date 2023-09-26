import { useAppSelector } from "../../hooks/store";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} done={todo.done} name={todo.name} id={todo.id} />
      ))}
    </>
  );
};
