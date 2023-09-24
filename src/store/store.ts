import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { todosSlice } from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
