import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/store";
import { startCreateUserWithEmailAndPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(({ name, email, password }) => {
    dispatch(startCreateUserWithEmailAndPassword({ name, email, password }));
    reset();
  });

  return (
    <AuthLayout titulo="Register">
      <form className=" animate__animated animate__fadeIn" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="name"
              type="text"
              placeholder="Aldrich"
              fullWidth
              {...register("name", {
                required: {
                  value: true,
                  message: "el nombre es requerido",
                },
                minLength: {
                  value: 4,
                  message: "el nombre debe contener minimo 4 caracteres",
                },
              })}
              error={!!errors.name}
              helperText={errors?.name?.message as string}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              {...register("email", {
                required: {
                  value: true,
                  message: "el email es requerido",
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
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                <Typography sx={{ mt: 1 }}>Crear Cuenta</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
            <Link color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
