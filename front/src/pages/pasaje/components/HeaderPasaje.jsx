import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HeaderFormulario() {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F3F3',
        marginTop: 4,
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4">BUSQUEDA DE PASAJE</Typography>
      </Grid>
    </Box>
  );
}
