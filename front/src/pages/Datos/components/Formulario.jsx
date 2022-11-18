import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Paper,
  TextField,
  Box,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Button,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    nombre: yup.string().required().min(3),
    apellido: yup.string().required().min(3),
    numero: yup.number().positive().integer().required(),
    tipo: yup.string().required(),
    fecha: yup.date().required(),
    telefono: yup.number().positive().integer().required(),
    sexo: yup.string().required(),
    pais: yup.string().required().min(3),
    email: yup.string().email().required(),
    direccion: yup.string().required().min(3),
  })
  .required();

function Formulario() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      nombre: '',
      apellido: '',
      numero: '',
      tipo: '',
      fecha: '',
      telefono: '',
      sexo: '',
      pais: '',
      direccion: '',
      email: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <Paper elevation={0} sx={{ p: 6 }} component="form">
      <TextField
        fullWidth
        label="Nombre"
        autoFocus
        {...register('nombre', { required: true })}
        sx={{ marginBottom: '8px', marginTop: '16px' }}
      />
      <p style={{ color: 'red' }}>{errors.nombre?.message}</p>
      <TextField
        fullWidth
        label="Apellido"
        {...register('apellido', { required: true })}
        sx={{ marginBottom: '8px', marginTop: '16px' }}
      />
      <p style={{ color: 'red' }}>{errors.apellido?.message}</p>

      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ width: '100px' }}>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              control={control}
              label="dni"
              // onChange={handleChange}
              {...register('tipo', { required: true })}
            >
              <MenuItem value="dni">DNI</MenuItem>
              <MenuItem value="rut">RUT</MenuItem>
              <MenuItem value="cpf">CPF</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Numero de documento"
            fullWidth
            {...register('numero', { required: true })}
          />
        </Stack>
      </Box>
      <p style={{ color: 'red' }}>{errors.tipo?.message}</p>
      <p style={{ color: 'red' }}>{errors.numero?.message}</p>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <FormControl>
            <TextField
              id="date"
              label="Fecha de Nacimiento"
              type="date"
              control={control}
              InputLabelProps={{
                shrink: true,
              }}
              {...register('fecha', { required: true })}
            />
          </FormControl>
          <TextField label="Telefono" fullWidth {...register('telefono', { required: true })} />
        </Stack>
      </Box>
      <p style={{ color: 'red' }}>{errors.fecha?.message}</p>
      <p style={{ color: 'red' }}>{errors.telefono?.message}</p>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ width: '150px' }}>
            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              control={control}
              label="sexo"
              // onChange={handleChanges}
              {...register('sexo', { required: true })}
            >
              <MenuItem value="hombre">Hombre</MenuItem>
              <MenuItem value="mujer">Mujer</MenuItem>
              <MenuItem value="x">X</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Pais de Origen" fullWidth {...register('pais', { required: true })} />
        </Stack>
      </Box>
      <p style={{ color: 'red' }}>{errors.sexo?.message}</p>
      <p style={{ color: 'red' }}>{errors.pais?.message}</p>
      <TextField
        fullWidth
        label="direccion"
        {...register('direccion', { required: true })}
        sx={{ marginBottom: '8px', marginTop: '16px' }}
      />
      <p style={{ color: 'red' }}>{errors.direccion?.message}</p>
      <TextField
        fullWidth
        label="e-mail"
        {...register('email', { required: true })}
        sx={{ marginBottom: '8px', marginTop: '16px' }}
      />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', mt: 5 }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F96D00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleSubmit((data) => {
            console.info(data);
          })}
        >
          Agregar informacion
        </Button>
      </Grid>
    </Paper>
  );
}

export default Formulario;
