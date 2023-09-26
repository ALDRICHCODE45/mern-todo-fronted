import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout titulo="Login">
        <form className=" animate__animated animate__fadeIn">
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" fullWidth type="submit">
                  <Typography sx={{ mt: 1 }}>Login</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link color="inherit" to="/auth/register">
                Crear Cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
