import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./purpleTheme";

interface props {
  children: JSX.Element;
}

export const AppTheme = ({ children }: props) => {
  return (
    <>
      <ThemeProvider theme={purpleTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};
