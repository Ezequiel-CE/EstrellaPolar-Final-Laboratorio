/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  ListItem,
  Container,
  Grid,
  Stack,
  Card,
  CardHeader,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Paper,
  Box,
} from '@mui/material';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Asiento from './components/asiento';

import { getAsientos } from '../../api/metodos';
/* http://localhost:5000/API/avion/asientos
realizar get api.post(avion/asiento,body)
{
  "v": 1,
  "a": 3,
  "clase": "vip"
}
paso hookquery + key + request recibo 3 estados data loading y error y
hacer condiciones en base a eso
Leer Docu Tanstack Query
Mutaciones
*/

const Asientos = () => {
  const [checked, setChecked] = React.useState([1]);
  const params = { v: 1, a: 3, clase: 'vip' };
  const { data, isLoading, error } = useQuery({
    queryKey: ['asientos', params],
    queryFn: () => getAsientos(params),
    // enabled: !!params,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  let asientosList;
  if (!isLoading) {
    asientosList = data.asientos.map((asiento, index) => <Asiento key={index} asiento={asiento} />);
  }

  return (
    <Container sx={{ backgroundColor: 'white', p: 3, borderRadius: '5px' }}>
      <Grid container justifyContent="center" spacing={1} rowSpacing={4} columnSpacing={10}>
        {asientosList}
      </Grid>
    </Container>
  );
};

export default Asientos;
