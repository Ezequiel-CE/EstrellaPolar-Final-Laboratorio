import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function PasajeInfo({ info }) {
  const { pasajero, pasaje, vuelo } = info;

  const fecha = new Date(vuelo.fecha);

  return (
    <Card sx={{ my: 4, p: 4, pl: 4, borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
      <Grid container>
        <h2>Pasaje </h2>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <PersonIcon sx={{ fontSize: '100px' }} />
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Nombre</h3>
                <p>

                  {pasajero.nombre}

                </p>
              </div>
              <div>
                <h3>Origen</h3>
                <p>{vuelo.origen}</p>
              </div>
            </Box>
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Apellido</h3>
                <p>
                  {pasajero.apellido}
                </p>
              </div>
              <div>
                <h3>Destino</h3>
                <p>{vuelo.destino}</p>
              </div>
            </Box>

            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Clase</h3>
                <p>{pasaje.categoria}</p>
              </div>
              <div>
                <h3>Butaca</h3>
                <p>{ info.asiento}</p>
              </div>
            </Box>
            <Box sx={{ width: '150px' }}>
              <div>
                <h3>Fecha de Salida</h3>
                <p>{fecha.toDateString()}</p>
              </div>
              <div>
                <h3>Horario</h3>
                <p>
                  {fecha.toLocaleTimeString('es-AR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}

                </p>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
