import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#395660",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
});
