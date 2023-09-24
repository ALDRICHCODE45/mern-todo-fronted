import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  //   Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { startLogoutUser } from "../../store/auth/thunks";

export const Navbar = () => {
  const { displayName } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(startLogoutUser());
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* <Typography variant="h6" noWrap component="div">
            {`Hola ${displayName} Bienvenido`}
          </Typography> */}
          <Avatar sx={{ bgcolor: "#ff1744" }}>
            {displayName.charAt(0).toUpperCase()}
          </Avatar>

          <IconButton onClick={onLogOut} color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
