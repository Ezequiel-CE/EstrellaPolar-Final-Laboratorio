import * as React from 'react';
import { Grid, Button, FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function FindFlight() {
  return (
    <Grid
      container
      sx={{
        p: 1.5,
        backgroundColor: 'white',
        borderRadius: '5px',
      }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      columns={{ xs: 4, md: 15 }}
    >
      <Grid item xs={7} md={3}>
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variant="filled"
        >
          <TextField
            id="origen-input"
            // value={name}
            label="Origen"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={7} md={3}>
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variant="filled"
        >
          <TextField
            id="destino-input"
            // value={name}
            label="Destino"
            variant="outlined"
          />
        </FormControl>
      </Grid>
      <Grid item xs={7} md={4}>
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          variant="filled"
        >
          <TextField
            id="fecha-input"
            label="fecha"
            defaultValue="2022-05-24"
            // value={name}
            type="date"
          />
        </FormControl>
      </Grid>
      <Grid
        item
        xs={7}
        md={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#F96D00',
            minWidth: '15rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SearchIcon />
          Buscar
        </Button>
      </Grid>
    </Grid>
  );
}
