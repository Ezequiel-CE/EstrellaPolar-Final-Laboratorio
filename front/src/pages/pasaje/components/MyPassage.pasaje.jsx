import * as React from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    nombre: yup.string().required().min(3),
    apellido: yup.string().required().min(3),
    numero: yup.number().positive().integer().required(),
    tipo: yup.string().required(),
  })
  .required();

// eslint-disable-next-line react/prop-types
function MyPassage({ encontrarPasaje }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      numero: '',
      tipo: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => encontrarPasaje(data);

  return (
    <Grid
      sx={{
        backgroundColor: '#F3F3F3',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Nombre"
            label="Nombre"
            name="Nombre"
            autoComplete="Nombre"
            {...register('nombre', { required: true })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Apellido"
            label="Apellido"
            name="Apellido"
            autoComplete="Apellido"
            {...register('apellido', { required: true })}
          />

          <FormControl fullWidth sx={{ marginTop: '16px', marginBottom: '8px' }}>
            <InputLabel id="demo-simple-select-label" required>
              Tipo de documento
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tipo documento"
              defaultValue=""
              {...register('tipo', { required: true })}
            >
              <MenuItem value="DNI">DNI</MenuItem>
              <MenuItem value="RUT">RUT</MenuItem>
              <MenuItem value="ID">ID</MenuItem>
              <MenuItem value="CPF">CPF</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            id="numeroDocumento"
            label="Numero documento"
            name="numeroDocumento"
            autoComplete="numeroDocumento"
            {...register('numero', { required: true })}
          />
          <Box sx={{ color: 'red' }}>
            <p>{errors.nombre?.message}</p>
            <p>{errors.apellido?.message}</p>
            <p>{errors.tipo?.message}</p>
            <p>{errors.numero?.message}</p>
          </Box>

          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2, backgroundColor: 'orange.main' }}
            >
              BUSCAR
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MyPassage;
