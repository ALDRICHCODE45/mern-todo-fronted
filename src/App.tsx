import { Toaster } from "sonner";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const App = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>

      <Toaster richColors />
    </>
  );
};
