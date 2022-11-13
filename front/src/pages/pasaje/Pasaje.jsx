import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import HeaderFormulario from './components/HeaderPasaje';
import MyPassage from './components/MyPassage.pasaje';

function Pasaje() {
  return (
    <div>
      <Grid container>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Card
            sx={{
              px: '35px',
              borderRadius: '30px',
              backgroundColor: '#F3F3F3',
              boxShadow:
                '200px 132px 96px rgba(0, 0, 0, 0.01), 113px 74px 81px rgba(0, 0, 0, 0.05), 50px 33px 60px rgba(0, 0, 0, 0.09), 13px 8px 33px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);',
            }}
          >
            <HeaderFormulario />
            <MyPassage />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Pasaje;
