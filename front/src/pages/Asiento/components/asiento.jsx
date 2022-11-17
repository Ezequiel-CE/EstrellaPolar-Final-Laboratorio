/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Box, Grid, Tooltip } from '@mui/material';
import React from 'react';

import WeekendTwoToneIcon from '@mui/icons-material/WeekendTwoTone';

import ToggleButton from '@mui/material/ToggleButton';
import { useApiContext } from '../../../context/state';

export default function Asiento(props) {
  const { state, selectAsiento } = useApiContext();
  const { aseleccionado } = props;
  const { asiento } = props;

  console.info(state);

  let colorAsiento = asiento.permitido ? 'success' : 'disable';
  if (asiento.info.estado === 'ocupado') {
    colorAsiento = 'error';
  }

  return (
    <Grid
      item
      xs={2}
      md={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h5>{asiento.placa}</h5>
        <Tooltip title={asiento.info.pasajero ? asiento.info.pasajero : 'libre'}>
          <ToggleButton
            value="check"
            selected={state.asientoSeleccionado === asiento.placa}
            onChange={(e) => {
              if (asiento.info.estado === 'ocupado' || !asiento.permitido) return;
              selectAsiento(asiento.placa);
            }}
          >
            <WeekendTwoToneIcon color={colorAsiento} />
          </ToggleButton>
        </Tooltip>
      </Box>
    </Grid>
  );
}
