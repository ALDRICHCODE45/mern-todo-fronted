/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useTodos } from "../hooks/useTodos";
import { useTodo } from "./hooks/useTodo";

import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface props {
  name: string;
  id: number;
  done: boolean;
}

export const Todo = ({ name, id, done }: props) => {
  const {
    newTaskName,
    showSaveTodoIcon,
    changeTaskDone,
    changeIconDoneToFalse,
    showTodoSaveIcon,
    newTodoName,
    changeIconDone,
  } = useTodo();

  const { onChangeDoneTodo, onDeleteTodo, onUpdateNote } = useTodos();

  useEffect(() => {
    onChangeDoneTodo(id, changeTaskDone);
  }, [changeTaskDone]);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onUpdateNote(id, newTaskName as string);
    showTodoSaveIcon(false);
    changeIconDoneToFalse();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    showTodoSaveIcon(true);
    newTodoName(event.target.value);
  };

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        <div className="row px-3 align-items-center todo-item rounded">
          <div className="col-auto m-1 p-0 d-flex align-items-center">
            <h2 className="m-0 p-0">
              <IconButton onClick={() => changeIconDone()}>
                <TaskAltIcon
                  sx={{ height: 30, color: `${done ? "#70be44" : "#ff1744"}` }}
                />
              </IconButton>
            </h2>
          </div>
          <div className="col px-1 m-1 d-flex align-items-center">
            <form onSubmit={onSubmit} className="form-control form-control-lg">
              <input
                onChange={onChange}
                className="form-control form-control-lg border-3 edit-todo-input bg-transparent rounded px-3"
                defaultValue={name}
              />
            </form>
          </div>
          <div className="col-auto m-1 p-0 px-3 d-none"></div>
          <div className="col-auto m-1 p-0 todo-actions">
            <div className=" d-flex align-items-center justify-content-start">
              <h5 className="m-0 p-0 px-2">
                <IconButton onClick={() => onDeleteTodo(id)}>
                  <DeleteIcon sx={{ color: "#ff0000" }} />
                </IconButton>
              </h5>
              <h5
                style={{ display: `${showSaveTodoIcon ? "" : "none"}` }}
                className="m-0 p-0 w-1 h-1 px-2"
              >
                {/* <IconButton
                  onClick={() => {
                    dispatch(startUpdatingNote(id, taskName as string));
                    setSaveNote(false);
                  }}
                >
                  <SaveIcon sx={{ color: "#008F39" }} />
                </IconButton> */}
                <Button
                  onClick={() => {
                    onUpdateNote(id, newTaskName as string);
                    showTodoSaveIcon(false);
                  }}
                  variant="contained"
                  endIcon={<SendIcon sx={{ color: "#8dc26a" }} />}
                >
                  {/* Send */}
                  Save
                </Button>
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
