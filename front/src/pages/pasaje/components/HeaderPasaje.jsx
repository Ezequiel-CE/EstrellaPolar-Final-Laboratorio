import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
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
theme = responsiveFontSizes(theme);

export default function HeaderFormulario() {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F3F3',
        marginTop: 4,
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">BUSQUEDA DE PASAJE</Typography>
        </ThemeProvider>
      </Grid>
    </Box>
  );
}
