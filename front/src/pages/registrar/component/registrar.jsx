/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Grid, Container, Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { registrarse } from '../../../api/metodos';
import { useApiContext } from '../../../context/state';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required().min(3).max(15),
  })
  .required();

export default function Registrar() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const { guardarToken } = useApiContext();

  const mutation = useMutation({
    mutationFn: (data) => registrarse(data),
  });

  useEffect(() => {
    if (mutation.isSuccess === true) {
      guardarToken(mutation.data);

      navigate('/');
    }
  }, [mutation.isSuccess]);

  return (
    <Container maxWidth="sm">
      <Grid container sx={{ backgroundColor: '#F3F3F3', mb: 4 }}>
        <Grid item>
          <Typography variant="h4" textAlign="start" sx={{ mt: 1, mb: 1 }}>
            Registrar Usuario
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
              // eslint-disable-next-line no-restricted-syntax
              mutation.mutate(data);
            })}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('email', {
                required: true,
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
              fullWidth
              id="password"
              label="Password"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('password', {
                required: true,
              })}
              autoComplete="current-password"
              type="password"
              sx={{ mt: 1.5, mb: 1.5 }}
            />
            <Box component="span" color="red">
              {errors.password?.message}
            </Box>
            {mutation.isError && (
              <Box component="span" color="red" textAlign="center">
                No se puedo crear cuenta
              </Box>
            )}
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
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
