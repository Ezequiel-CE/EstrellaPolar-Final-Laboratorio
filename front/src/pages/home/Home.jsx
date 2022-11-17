import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

function Home() {
  return (
    <div>
      <Typography
        fullWidth
        display="flex"
        justifyContent="center"
        variant="h3"
        color="white"
        fontFamily="Aboreto"
      >
        Thanks for Flight with us!
      </Typography>
      <Grid item display="flex" justifyContent="center" xs={12} sm={12}>
        <Box>
          <div className="ratio ratio-16x9">
            <iframe
              width="1221"
              height="480"
              src="https://www.youtube.com/embed/RoKeSWzZAwA"
              title="The Wonderful World of Flying (HD) - Wolfe Air Reel by 3DF"
              border="0"
              allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </Box>
      </Grid>
    </div>
  );
}

export default Home;
