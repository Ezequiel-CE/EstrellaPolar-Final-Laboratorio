import * as React from 'react';
import {
  Grid,
  Button,
  Container,
  Box,
  Typography,
  InputLabel,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function FindFlight() {
  return (
    <Container>
      <Typography variant="h6" align="start">
        Busca tu vuelo
      </Typography>
      <Box
        shrink
        sx={{
          p: 2,
          backgroundColor: 'lightgrey',
          borderRadius: '10px',
          fontSize: '14px',
          boxShadow: '0px 3px 15px black',
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            spacing: 2,
          }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3}>
            <InputLabel shrink htmlFor="origen-input">
              Origen
            </InputLabel>
            <TextField placeholder="ingrese origen" id="origen-input" type="search" />
          </Grid>
          <Grid item xs={3}>
            <InputLabel shrink htmlFor="destino-input">
              Destino
            </InputLabel>
            <TextField placeholder="ingrese destino" id="destino-input" type="search" />
          </Grid>
          <Grid item xs={3}>
            <InputLabel shrink htmlFor="destino-input">
              Fecha
            </InputLabel>
            <TextField id="fecha-input" type="date" />
          </Grid>
          <Grid item xs={3} display="flex" alignItems="end" justifyContent="center">
            <Button
              variant="contained"
              color="orange"
              sx={{
                height: '3em',
                fontSize: '16px',
              }}
            >
              <SearchIcon />
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
