import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlainLogo from '../../../assets/login-logo.jpg';

export default function HeaderFormulario() {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F3F3',
        marginTop: 4,
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h5" fontFamily="Roboto">
          Welcome
        </Typography>
        <Typography variant="h5" fontFamily="Roboto">
          to
        </Typography>
        <Typography variant="h4" fontFamily="Aboreto" fontWeight="bold">
          Estrella Polar
        </Typography>
      </Grid>
      <Grid>
        <CardMedia component="img" height="140" image={PlainLogo} alt="Plain Logo" />
      </Grid>
    </Box>
  );
}
