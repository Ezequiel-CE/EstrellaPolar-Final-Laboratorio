import React from 'react';
import { Box, Grid } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';

const avion = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </div>
  );
};
