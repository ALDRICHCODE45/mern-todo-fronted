import AssignmentIcon from "@mui/icons-material/Assignment";
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import { TodoList } from "../components/TodoList";
import { useTodos } from "../hooks/useTodos";
import { CreateTask } from "../components/createTask";

export const TodoView = () => {
  const { todos, oncreateTodo } = useTodos();

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit(({ todo }) => {
    oncreateTodo(todo);
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
        <div className="m-1 p-3 px-5 "></div>

        {todos.length ? (
          <TodoList />
        ) : (
          <Grid item xs={12} justifyContent="center">
            <CreateTask />
          </Grid>
        )}
      </div>
    </>
  );
};
