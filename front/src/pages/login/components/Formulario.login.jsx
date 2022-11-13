import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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

export default function FormularioLogin() {
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={5}
        >
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="orange"
              sx={{ mt: 3, mb: 2 }}
            >
              <Typography variant="h6" fontFamily="Roboto">
                SIGN IN
              </Typography>
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Grid>
  );
}
