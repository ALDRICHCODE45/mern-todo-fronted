import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskWidthOutId {
  name: string;
  done: boolean;
}

interface Task extends TaskWidthOutId {
  id: number;
}

const tasks: Task[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: tasks,
  },
  reducers: {
    createTodo: (state, { payload }: PayloadAction<TaskWidthOutId>) => {
      const addIdToTask = { ...payload, id: Math.random() };
      state.todos.push(addIdToTask);
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo } = todosSlice.actions;
