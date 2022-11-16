import * as React from 'react';
import { Box, TextField, Paper, Stack } from '@mui/material';

function Datos() {
  return (
    <Paper elevation={0} sx={{ p: 6 }}>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2} sx={{ display: 'flex' }}>
          <Box flexGrow={1}>
            <TextField
              margin="normal"
              required
              id="Numero"
              label="Numero de Tarjeta"
              name="Numero"
              autoComplete="numero"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              margin="normal"
              required
              id="codigo"
              label="Codigo"
              name="codigo"
              autoComplete="codigo"
              sx={{ width: '100px' }}
            />
          </Box>
        </Stack>
      </Box>
      <Box sx={{ marginBottom: '8px', marginTop: '16px', display: 'flex', gap: '15px' }}>
        <TextField
          margin="normal"
          id="date"
          label="Fecha de Vencimiento"
          type="date"
          defaultValue="1960-01-01"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '250px' }}
        />

        <TextField
          margin="normal"
          required
          id="numeroDocumento"
          label="Numero documento"
          name="numeroDocumento"
          autoComplete="numeroDocumento"
          fullWidth
        />
      </Box>
    </Paper>
  );
}

export default Datos;
