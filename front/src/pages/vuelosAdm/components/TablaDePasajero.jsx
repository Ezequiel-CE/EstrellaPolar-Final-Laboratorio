/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';

const TablaDePasajero = (props) => {
  const { pasajeros, vuelo } = props;
  let columna = Object.keys(pasajeros[0].pasajero);
  columna = [...columna, 'fecha de compra', 'Asiento'];

  console.info(pasajeros);
  return (
    <TableContainer component={Paper}>
      <h1>{`${vuelo.origen} - ${vuelo.destino}`}</h1>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            {columna.map((pasajero) => (
              <TableCell align="right">{pasajero}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pasajeros.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="right">{row.pasajero.id}</TableCell>
              <TableCell align="right">{row.pasajero.nombre}</TableCell>
              <TableCell align="right">{row.pasajero.apellido}</TableCell>
              <TableCell align="right">{row.pasajero.tipo_documento}</TableCell>
              <TableCell align="right">{row.pasajero.num_documento}</TableCell>
              <TableCell align="right">{row.pasajero.fecha_nacimiento}</TableCell>
              <TableCell align="right">{row.pasajero.telefono}</TableCell>
              <TableCell align="right">{row.pasajero.direccion}</TableCell>
              <TableCell align="right">{row.pasajero.email}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.asiento}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaDePasajero;
