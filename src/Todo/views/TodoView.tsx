import AssignmentIcon from "@mui/icons-material/Assignment";
import { Todo } from "../components/Todo";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useForm } from "react-hook-form";
import { startCreateTodo } from "../../store/todos/thunks";
import { TextField } from "@mui/material";

export const TodoView = () => {
  const { todos } = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
    // control,
  } = useForm();

  const onSubmit = handleSubmit(({ todo }) => {
    dispatch(startCreateTodo({ name: todo }));
    reset();
  });

  return (
    <>
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i className="fa fa-check bg-primary text-white rounded p-2"></i>
              <u>TODO APP</u>
            </div>
          </div>
        </div>
        <div className="row m-1 p-3">
          <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div className="col">
                <form onSubmit={onSubmit}>
                  <TextField
                    className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                    type="text"
                    placeholder="Add new .."
                    // value={activeNote?.name}
                    {...register("todo", {
                      required: {
                        value: true,
                        message: "todo name is required",
                      },
                      minLength: {
                        value: 3,
                        message: "se requieren minimo 3 caracteres",
                      },
                    })}
                    error={!!errors.todo}
                    helperText={errors?.todo?.message as string}
                  />
                </form>
              </div>
              <div className="col-auto m-0 px-2 d-flex align-items-center">
                <AssignmentIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        <div className="row m-1 p-3 px-5 justify-content-end">
          <div className="col-auto d-flex align-items-center">
            <label className="text-secondary my-2 pr-2 view-opt-label">
              Filter
            </label>
            <select
              defaultValue={"all"}
              className="custom-select custom-select-sm btn my-2"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="has-due-date">Has due date</option>
            </select>
          </div>
        </div>

        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              done={todo.done}
              name={todo.name}
              id={todo.id}
            />
          ))
        ) : (
          <h2>Agrega Una tarea</h2>
        )}
      </div>
    </>
  );
};
