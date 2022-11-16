/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Box,
  Card,
  Grid,
  Paper,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import React from 'react';

import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function Asiento(props) {
  const { asiento } = props;
  return (
    <Grid item xs={4} md={4} justifyContent="center">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>{asiento.placa}</h3>
      </Box>
    </Grid>
  );
}
