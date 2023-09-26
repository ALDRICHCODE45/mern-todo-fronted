import { useState } from "react";

type name = string;

export const useTodo = () => {
  const [newTaskName, setNewTaskName] = useState<name>();
  const [showSaveTodoIcon, setShowSaveTodoIcon] = useState<boolean>(false);
  const [changeTaskDone, setChangeTaskDone] = useState<boolean>(false);

  const changeIconDone = () => {
    setChangeTaskDone((changeTaskDone) => !changeTaskDone);
  };

  const changeIconDoneToFalse = () => {
    setChangeTaskDone(false);
  };

  const showTodoSaveIcon = (value: boolean) => setShowSaveTodoIcon(value);

  const newTodoName = (value: string) => {
    setNewTaskName(value);
  };

  return {
    // properties
    newTaskName,
    showSaveTodoIcon,
    changeTaskDone,
    // methods
    changeIconDone,
    showTodoSaveIcon,
    changeIconDoneToFalse,
    newTodoName,
  };
};
