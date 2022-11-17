import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Box, Card, Grid } from '@mui/material';

export default function Lainformacion() {
  return (
    <Card sx={{ p: 4, pl: 4, borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
      <Grid container>
        <h2>TICKET DE VUELO</h2>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AirplanemodeActiveIcon sx={{ fontSize: '100px' }} />
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Nombre</h3>
                <p>Marcelo Alejandro</p>
              </div>
              <div>
                <h3>Origen</h3>
                <p>Argentina</p>
              </div>
            </Box>
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Apellido</h3>
                <p>Cabral Giamperi</p>
              </div>
              <div>
                <h3>Destino</h3>
                <p>Brasil</p>
              </div>
            </Box>

            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Clase</h3>
                <p>Vip</p>
              </div>
              <div>
                <h3>Butaca</h3>
                <p>12</p>
              </div>
            </Box>
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Fecha de Salida</h3>
                <p>20-11-2022</p>
              </div>
              <div>
                <h3>Horario</h3>
                <p>12:00 Hrs.</p>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
