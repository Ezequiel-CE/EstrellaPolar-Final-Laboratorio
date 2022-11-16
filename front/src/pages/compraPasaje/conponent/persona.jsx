import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MenuItem, Select, InputLabel, FormControl, Paper, Stack } from '@mui/material';

export default function Persona() {
  const [dni, setDni] = React.useState('dni');
  const [sexo, setSexo] = React.useState('');

  const handleChange = (event) => {
    setDni(event.target.value);
  };
  const handleChanges = (event) => {
    setSexo(event.target.value);
  };

  return (

    <Paper elevation={0} sx={{ p: 6 }}>

      <TextField margin="normal" required fullWidth label="Nombre" autoFocus />
      <TextField margin="normal" required fullWidth label="Apellido" autoFocus />

      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ width: '100px' }}>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dni}
              label="dni"
              onChange={handleChange}
            >
              <MenuItem value="dni">DNI</MenuItem>
              <MenuItem value="rut">RUT</MenuItem>
              <MenuItem value="cpf">CPF</MenuItem>
            </Select>
          </FormControl>

          <TextField margin="none" required label="Numero de documento" fullWidth />
        </Stack>
      </Box>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <formControl>
            <TextField
              id="date"
              label="Fecha de Nacimiento"
              type="date"
              defaultValue="2022-01-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </formControl>
          <TextField margin="standar" required label="Telefono" fullWidth />
        </Stack>
      </Box>
      <Box sx={{ marginBottom: '8px', marginTop: '16px' }}>
        <Stack direction="row" spacing={2}>
          <FormControl sx={{ width: '150px' }}>
            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sexo}
              label="sexo"
              onChange={handleChanges}
            >
              <MenuItem value="hombre">Hombre</MenuItem>
              <MenuItem value="mujer">Mujer</MenuItem>
              <MenuItem value="x">X</MenuItem>
            </Select>
          </FormControl>
          <TextField margin="standar" required label="Pais de Origen" fullWidth />
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button
          orange
          type="submit"
          variant="contained"
          size="large"
          color="orange"
          sx={{ mt: 3, mb: 2 }}
        >
          <Typography variant="h6" fontFamily="Roboto">
            + Agregar otra Persona
          </Typography>
        </Button>

      </Box>

    </Paper>

  );
}
