import * as React from 'react';
import { Box, TextField, Paper, Stack } from '@mui/material';

function Datos({ register, control, errors }) {
  return (
    <Paper elevation={0} sx={{ p: 6 }}>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2} sx={{ display: 'flex' }}>
          <Box flexGrow={1}>
            <TextField
              margin="normal"
              id="Numero"
              label="Numero de Tarjeta"
              name="Numero"
              autoComplete="numero"
              fullWidth
              {...register('numeroT', { required: true })}
            />
          </Box>
          <Box>
            <TextField
              margin="normal"
              id="codigo"
              label="Codigo"
              name="codigo"
              autoComplete="codigo"
              sx={{ width: '100px' }}
              {...register('codigoT', { required: true })}
            />
          </Box>
        </Stack>
      </Box>
      <p style={{ color: 'red' }}>{errors.numeroT?.message}</p>
      <p style={{ color: 'red' }}>{errors.codigoT?.message}</p>
      <Box sx={{ marginBottom: '8px', marginTop: '16px', display: 'flex', gap: '15px' }}>
        <TextField
          margin="normal"
          id="date"
          label="Fecha de Vencimiento"
          type="date"
          defaultValue=""
          control={control}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '250px' }}
          {...register('fechaT', { required: true })}
        />

        <TextField
          margin="normal"
          id="numeroDocumento"
          label="Numero documento"
          name="numeroDocumento"
          autoComplete="numeroDocumento"
          fullWidth
          {...register('numeroD', { required: true })}
        />
      </Box>
      <p style={{ color: 'red' }}>{errors.fechaT?.message}</p>
      <p style={{ color: 'red' }}>{errors.numeroD?.message}</p>
    </Paper>
  );
}

export default Datos;
