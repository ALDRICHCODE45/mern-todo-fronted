import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useForm } from "react-hook-form";
import { startLoginUser } from "../../store/auth/thunks";

export const LoginPage = () => {
  const { errorMessage } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    dispatch(startLoginUser({ email, password }));
    reset();
  });
  return (
    <>
      <AuthLayout titulo="Login">
        <form
          onSubmit={onSubmit}
          className=" animate__animated animate__fadeIn"
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "correo no valido",
                  },
                })}
                error={!!errors.email}
                helperText={errors?.email?.message as string}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                {...register("password", {
                  required: {
                    value: true,
                    message: "la contraseña es requerida",
                  },
                  minLength: {
                    value: 4,
                    message: "la contrasena debe contener minimo 4 caracteres",
                  },
                })}
                error={!!errors.password}
                helperText={errors?.password?.message as string}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    mb: 2,
                    display: `${!errorMessage ? "none" : ""}`,
                  }}
                >
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
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
