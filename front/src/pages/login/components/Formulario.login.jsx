import * as React from 'react';
import { Grid, Container, Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function FormularioLogin() {
  const {
    user,
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
              {...user('email', {
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
              {...user('password', {
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
            <Button
              color="orange"
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 1.5, mb: 1 }}
            >
              <Typography variant="h6" fontFamily="Roboto">
                Sign In
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
