/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function Pasajero({ info }) {
  return (
    <Card sx={{ my: 4, p: 4, pl: 4, borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h5" textAlign="center" pb={3}>
            Pasajero
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <PersonIcon sx={{ fontSize: '100px' }} />
            <Box sx={{ width: '200px' }}>
              <div>
                <h3>Nombre y apellido</h3>
                <p>{`${info.nombre} ${info.apellido}`}</p>
              </div>
              <div>
                <h3>Documento</h3>
                <p>{`${info.tipo_documento} ${info.num_documento}`}</p>
              </div>
            </Box>
            <Box sx={{ width: '200px' }}>
              <div>
                <h3>E-mail</h3>
                <p>{`${info.email} `}</p>
              </div>
              <div>
                <h3>Telefono</h3>
                <p>{`${info.telefono}`}</p>
              </div>
            </Box>
            <Box sx={{ width: '200px' }}>
              <div>
                <h3>Fecha nacimiento</h3>
                <p>{`${info.fecha_nacimiento} `}</p>
              </div>
              <div>
                <h3>Telefono</h3>
                <p>{`${info.direccion}`}</p>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
