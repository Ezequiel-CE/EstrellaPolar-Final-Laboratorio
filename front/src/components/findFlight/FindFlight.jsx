import * as React from 'react';
import { TextField, Grid, Button, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function FindFlight() {
  return (
    <Container fixed>
      <Grid container>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Box component="span" sx={{ p: 2, border: '1px solid grey' }}>
            <TextField
              id="buscar-origen"
              label="Origen"
              type="search"
              variant="outlined"
            />

            <TextField
              id="buscar-destino"
              label="Destino"
              type="search"
              variant="outlined"
            />

            <TextField id="fecha" label="" type="date" variant="outlined" />

            <Button
              variant="contained"
              color="primary"
              sx={{ ml: 20, fontWeight: 'light', fontSize: '140%' }}
            >
              <SearchIcon />
              Buscar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
