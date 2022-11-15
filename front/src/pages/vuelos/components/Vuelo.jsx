/* eslint-disable react/prop-types */
import React from 'react';

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Box, Card, Grid, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export default function Vuelo(props) {
  const { vuelo } = props;
  const { pasajes } = vuelo;
  const { fecha } = vuelo;

  const formateador = new Intl.DateTimeFormat('es-AR', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  });
  const nuevaFecha = new Date(fecha);
  const fechaFormateada = formateador.format(nuevaFecha);

  const objPasajes = pasajes.reduce((acc, pasaje) => {
    acc[pasaje.categoria] = pasaje;
    return acc;
  }, {});

  const [clase, setClase] = React.useState(
    objPasajes.comercial ? objPasajes.comercial.total : pasajes[0].total,
  );

  const handleChange = (event) => {
    const valor = event.target.value;
    setClase(valor);
  };

  return (
    <Card sx={{ p: 2, pl: 4, borderRadius: '5px', backgroundColor: '#F3F3F3' }}>
      <Grid container direction="row" alignItems="center" spacing={10}>
        <Grid item xs={4} md={1}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AirplanemodeActiveIcon sx={{ fontSize: '100px', transform: 'rotate(50deg)' }} />
          </Box>
        </Grid>
        <Grid item xs={3} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>Origen</h3>
            <p>{vuelo.origen}</p>
          </Box>
        </Grid>
        <Grid item xs={3} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>Destino</h3>
            <p>{vuelo.destino}</p>
          </Box>
        </Grid>

        <Grid item xs={6} md={2}>
          {' '}
          <Box sx={{ width: '120px' }}>
            <FormControl sx={{ m: 1 }} variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-label">Clase</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clase}
                label="clase"
                onChange={handleChange}
              >
                {pasajes.map((pasaje) => (
                  <MenuItem key={pasaje.id} value={pasaje.total}>
                    {pasaje.categoria}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3>Fecha</h3>
            <p>{fechaFormateada}</p>
          </Box>
        </Grid>
        <Grid item xs={1} md={1}>
          <Box>
            <h2>{`${clase}$`}</h2>
            <Button variant="contained" sx={{ p: 1 }}>
              Comprar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
