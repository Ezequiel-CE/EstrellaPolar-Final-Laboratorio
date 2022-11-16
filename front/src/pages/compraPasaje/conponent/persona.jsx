import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { MenuItem, Select, InputLabel, FormControl, Paper, Stack } from '@mui/material';
// import { useForm } from 'react-hook-form';

export default function Persona({ register, control, errors }) {
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
    </Paper>
  );
}
