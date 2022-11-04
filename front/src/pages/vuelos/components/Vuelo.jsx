import React from 'react';

import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import {
  Box,
  Card,
  Grid,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

export default function Vuelo() {
  const [clase, setClase] = React.useState('');

  const handleChange = (event) => {
    setClase(event.target.value);
  };

  return (
    <Card sx={{ p: 2, pl: 4, borderRadius: '10px', backgroundColor: '#D3D3D3' }}>
      <Grid container>
        <Grid item xs={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AirplanemodeActiveIcon sx={{ fontSize: '100px' }} />
            <div>
              <h3>Origen</h3>
              <p>Cordoba</p>
            </div>
            <div>
              <h3>Destino</h3>
              <p>argentina</p>
            </div>
            <Box sx={{ width: '120px' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Clase</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clase}
                  label="clase"
                  onChange={handleChange}
                >
                  <MenuItem value="vip">vip</MenuItem>
                  <MenuItem value="comercial">comercial</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div>
              <h3>fecha</h3>
              <p>14-28-211</p>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <h2>$52000</h2>
          <Button variant="contained" sx={{ p: 1 }}>
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
