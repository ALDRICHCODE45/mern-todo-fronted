import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components/Navbar";
interface props {
  children: JSX.Element | JSX.Element[];
}

export const JournalLayout = ({ children }: props) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className=" animate__animated animate__fadeIn"
    >
      {/* navbar */}
      <Navbar />

      {/* sidebar*/}
      {/* <SideBar drawerWidth={drawerWidth} /> */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
