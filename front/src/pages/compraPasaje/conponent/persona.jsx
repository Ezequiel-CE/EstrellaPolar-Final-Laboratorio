import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const theme = createTheme({
  palette: {
    orange: {
      main: '#D8552B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Amatica SC"',
    ].join(','),
  },
});

export default function Persona() {
  const [dni, setDni] = React.useState('');
  const [sexo, setSexo] = React.useState('');

  const handleChange = (event) => {
    setDni(event.target.value);
  };
  const handleChanges = (event) => {
    setSexo(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#f3f3f3',
        }}
      >
        <Grid item>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label="Nombre" autoFocus />
            <TextField margin="normal" required fullWidth label="Apellido" autoFocus />
          </Box>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <FormControl>
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
            <TextField margin="none" required label="Numero de documento" autoFocus />
          </Box>
          <Box component="form" sx={{ mt: 1 }}>
            <formControl>
              <TextField
                id="date"
                label="Fecha de Nacimiento"
                type="date"
                defaultValue="1960-01-01"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </formControl>
            <TextField margin="standar" required label="Telefono" autoFocus />
          </Box>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <FormControl>
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
            <TextField margin="standar" required label="Pais de Origen" autoFocus />
          </Box>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container direction="row" justifyContent="center" alignItems="center" xs={8}>
              <ThemeProvider theme={theme}>
                <Button
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
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
