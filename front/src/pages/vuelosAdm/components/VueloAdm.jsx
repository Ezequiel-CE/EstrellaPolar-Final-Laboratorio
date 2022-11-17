/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Card, Grid, Typography, Box, Modal } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import TablaDePasajero from './TablaDePasajero';
import { conseguirPasajeroPorVuelo } from '../../../api/metodos';

const VueloAdm = (props) => {
  const { vuelo } = props;
  const avion = { ...vuelo.avions[0] };
  const [open, setOpen] = useState(false);
  const param = vuelo.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ['pasajeros', param],
    queryFn: () => conseguirPasajeroPorVuelo(param),
    enabled: !!open,
    // refetchOnWindowFocus: false,
    retry: 1,
  });
  let pasajero;
  if (!isLoading) {
    pasajero = (
      <TablaDePasajero pasajeros={data} vuelo={{ origen: vuelo.origen, destino: vuelo.destino }} />
    );
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{pasajero}</Box>
      </Modal>

      <Card
        sx={{
          p: 2,
          pl: 4,
          borderRadius: '5px',
          backgroundColor: '#F3F3F3',
          ':hover': {
            bgcolor: '#d5e5ff',
            color: 'white',
            cursor: 'pointer',
            transition: '1s ease-in-out',
          },
          ':active': {
            position: 'relative',
            top: '1px',
          },
        }}
        onClick={handleOpen}
      >
        <Grid container justifyContent="center" alignItems="center" pacing={5}>
          <Grid item xs={4} md={1.5}>
            <Box>
              <Typography color="black">Origen:</Typography>
              <Typography>{vuelo.origen}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={1.5}>
            <Box>
              <Typography color="black">Destino: </Typography>
              <Typography>{vuelo.destino}</Typography>
            </Box>
          </Grid>

          <Grid item xs={4} md={1.5}>
            <Box>
              <Typography color="black">Fecha:</Typography>
              <Typography>{vuelo.fecha}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={1.5}>
            <Box>
              <Typography color="black">Aerolinea:</Typography>
              <Typography>{avion.aerolinea}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={1.5}>
            <Box>
              <Typography color="black">Capacidad:</Typography>
              <Typography>{avion.capacidad}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default VueloAdm;
