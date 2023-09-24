import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/store";

interface props {
  drawerWidth: number;
}

export const SideBar = ({ drawerWidth }: props) => {
  //   const { displayName, photoURL } = useSelector((state) => state.auth);
  //   const { notes } = useSelector((state) => state.journal);
  const { displayName } = useAppSelector((state) => state.auth);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          {/* <Avatar sx={{ mr: 2 }}>{photoURL}</Avatar> */}
          {/* <Avatar sx={{ mr: 2 }} src={!!photoURL ? photoURL : "N"} /> */}

          <Typography noWrap component="div">
            Bienvenido, {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {/* {notes.map((note) => (
            <SideBarItemNotes {...note} key={note.id} />
          ))} */}
        </List>
      </Drawer>
    </Box>
  );
};
