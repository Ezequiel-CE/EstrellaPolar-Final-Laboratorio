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
  const [clase, setClase] = React.useState('');

  const handleChange = (event) => {
    setClase(event.target.value);
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clase}
                label="clase"
                onChange={handleChange}
              >
                <MenuItem value="dni">DNI</MenuItem>
                <MenuItem value="rut">RUT</MenuItem>
                <MenuItem value="cpf">CPF</MenuItem>
              </Select>
            </FormControl>
            <TextField margin="normal" required fullWidth label="Numero de documento" autoFocus />
            <form noValidate>
              <TextField
                id="date"
                label="Fecha de Nacimiento"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
            <TextField margin="normal" required fullWidth label="Telefono" autoFocus />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pais</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clase}
                label="clase"
                onChange={handleChange}
              >
                <MenuItem value="dni">Argentina</MenuItem>
                <MenuItem value="rut">Uruguay</MenuItem>
                <MenuItem value="cpf">Brasil</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clase}
                label="clase"
                onChange={handleChange}
              >
                <MenuItem value="dni">Hombre</MenuItem>
                <MenuItem value="rut">Mujer</MenuItem>
                <MenuItem value="cpf">X</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container direction="row" justifyContent="center" alignItems="center" xs={4}>
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
