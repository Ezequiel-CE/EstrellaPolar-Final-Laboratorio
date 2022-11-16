import * as React from 'react';
import { Grid, Container, Box, TextField, Button, Typography, Breadcrumbs } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function FormularioLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Container maxWidth="sm">
      <Grid container sx={{ backgroundColor: '#F3F3F3', mb: 4 }}>
        <Grid item>
          <Typography variant="h4" textAlign="start" sx={{ mt: 1, mb: 1 }}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
              // eslint-disable-next-line no-restricted-syntax
              console.log(data);
            })}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('email', {
                required: true,
                maxLength: 50,
              })}
              autoComplete="email"
              type="text"
              autoFocus
              sx={{ mt: 1.5, mb: 1.5 }}
            />
            <Box component="span" color="red">
              {errors.email?.message}
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('password', {
                required: true,
                minLength: { value: 6, message: 'Minimo: 6 caracteres' },
                maxLength: 300,
              })}
              autoComplete="current-password"
              type="password"
              sx={{ mt: 1.5, mb: 1.5 }}
            />
            <Box component="span" color="red">
              {errors.password?.message}
            </Box>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
              <Button
                color="inherit"
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 1.5, mb: 1 }}
              >
                <Typography variant="h6" fontFamily="Roboto">
                  Ingresar
                </Typography>
              </Button>
              <Button
                color="inherit"
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 1.5, mb: 1 }}
              >
                <Typography variant="h6" fontFamily="Roboto">
                  Crear Cuenta
                </Typography>
              </Button>
            </Grid>
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            sx={{ mt: 3, mb: 0.5 }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                olvide mi contraseña
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
