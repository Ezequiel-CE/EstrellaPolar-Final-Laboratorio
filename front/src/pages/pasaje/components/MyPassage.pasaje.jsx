import React from 'react';
import { Grid, Box } from '@mui/material';

function MyPassage() {
  return (
    <div>
      <Grid container maxWidth="lg">
        <Box
          sx={{
            width: '400px',
            height: '400px',
            backgroundColor: 'lightgrey',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            justifyItems: 'center',
            alingItems: 'center',
            alignContent: 'center',
          }}
        >
          <Grid
            spacing={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            textAlign="center"
            alignContent="center"
            sx={{ height: '200px', width: '200px' }}
          >
            <Grid>1</Grid>
            <Grid>2</Grid>
            <Grid>3</Grid>
            <Grid>4</Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
export default MyPassage;
