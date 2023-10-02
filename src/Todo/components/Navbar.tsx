import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Grid, IconButton, Toolbar } from "@mui/material";
import { useAuth } from "../../Auth/hooks/useAuth";

export const Navbar = () => {
  const { onLogOut, displayName } = useAuth();

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
