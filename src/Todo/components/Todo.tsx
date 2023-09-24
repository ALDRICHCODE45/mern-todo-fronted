import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../hooks/store";
import { startDeletingTodo } from "../../store/todos/thunks";

interface props {
  name: string;
  id: number;
}

export const Todo = ({ name, id }: props) => {
  const dispatch = useAppDispatch();

  const onDeleteTodo = (id: number) => {
    dispatch(startDeletingTodo(id));
  };

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        <div className="row px-3 align-items-center todo-item rounded">
          <div className="col-auto m-1 p-0 d-flex align-items-center">
            <h2 className="m-0 p-0">
              <IconButton>
                <TaskAltIcon sx={{ height: 30, color: "#0d6efd" }} />
              </IconButton>
            </h2>
          </div>
          <div className="col px-1 m-1 d-flex align-items-center">
            <div className="form-control form-control-lg border-3 edit-todo-input bg-transparent rounded px-3">
              {name}
            </div>
          </div>
          <div className="col-auto m-1 p-0 px-3 d-none"></div>
          <div className="col-auto m-1 p-0 todo-actions">
            <div className=" d-flex align-items-center justify-content-start">
              <h5 className="m-0 p-0 px-2">
                <IconButton>
                  <CreateIcon sx={{ color: "#0d6efd" }} />
                </IconButton>
              </h5>
              <h5 className="m-0 p-0 px-2">
                <IconButton onClick={() => onDeleteTodo(id)}>
                  <DeleteIcon sx={{ color: "#ff0000" }} />
                </IconButton>
              </h5>
            </div>
          </div>
        </div>
        <div className="row px-3 align-items-center todo-item editing rounded">
          <div className="col-auto m-1 p-0 px-3 d-none"></div>
        </div>
      </div>
    </div>
  );
};
