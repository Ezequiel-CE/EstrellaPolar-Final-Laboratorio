import * as React from 'react';
import {
  Grid,
  Button,
  Container,
  Box,
  Typography,
  InputBase,
  FormControl,
  InputLabel,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function FindFlight() {
  return (
    <Container>
      <Typography variant="h6" align="start">
        Busca tu vuelo
      </Typography>
      <Box
        shrink
        sx={{
          width: '110vh',
          height: 'auto',
          p: 2,
          backgroundColor: 'lightgrey',
          borderRadius: '10px',
          fontSize: '14px',
          boxShadow: '0px 3px 15px black',
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            spacing: 2,
          }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3}>
            <FormControl variant="filled">
              <InputLabel shrink htmlFor="origen-input">
                Origen
              </InputLabel>
              <BootstrapInput
                placeholder="ingrese origen"
                id="origen-input"
                type="search"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="filled">
              <InputLabel shrink htmlFor="destino-input">
                Destino
              </InputLabel>
              <BootstrapInput
                placeholder="ingrese destino"
                id="destino-input"
                type="search"
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="filled">
              <InputLabel shrink htmlFor="destino-input">
                Fecha
              </InputLabel>
              <BootstrapInput id="fecha-input" type="date" />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              alingItems: 'center',
              alignContent: 'center',
              justifyItems: 'center',
              justifyContent: 'end',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: '120%',
                backgrounColor: 'lightblue',
              }}
            >
              <SearchIcon sx={{ margin: '10px 10px 10px 0px' }} />
              Buscar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
