import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PasajeInfo from './PasajeInfo';

// eslint-disable-next-line react/prop-types
function ListadePasajes({ pasajes }) {
  return (
    <Container>
      <Typography variant="h2" component="h2" textAlign="center" pb={3}>
        Tus pasajes
      </Typography>
      <Box>
        {pasajes.map((data) => (
          <PasajeInfo info={data} />
        ))}
      </Box>
    </Container>
  );
}

export default ListadePasajes;
