import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskWidthOutId {
  name: string;
  done: boolean;
}

interface Task extends TaskWidthOutId {
  id: number;
}
interface payloadToUpdate {
  name: string;
  id: number;
}
interface ChangeTodoDone {
  id: number;
  done: boolean;
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
    updateNote: (state, { payload }: PayloadAction<payloadToUpdate>) => {
      state.todos = state.todos.map((note) => {
        if (payload.id === note.id) return { ...note, name: payload.name };
        return note;
      });
    },
    updateTodoDone: (state, { payload }: PayloadAction<ChangeTodoDone>) => {
      state.todos = state.todos.map((todo) => {
        if (payload.id === todo.id) return { ...todo, done: payload.done };
        return todo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, deleteTodo, updateNote, updateTodoDone } =
  todosSlice.actions;
