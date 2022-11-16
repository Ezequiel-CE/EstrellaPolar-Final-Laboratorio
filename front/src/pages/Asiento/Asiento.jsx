import React from 'react';
import {
  ListItem,
  Container,
  Grid,
  CardHeader,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Button,
  Box,
} from '@mui/material';
import EventSeatIcon from '@mui/icons-material/EventSeat';

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

const Asiento = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        p: '15px',
        backgroundColor: '#F3F3F3',
        borderRadius: '10px',
        boxShadow: '1.5rem 2.5rem 2rem -2rem hsl(200 50% 20% / 40%)',
      }}
    >
      <CardHeader
        fontZise="h1"
        sx={{ textAlign: 'center' }}
        title="Asientos disponibles"
        titleTypographyProps={{ fontWeight: 'bold', variant: 'h4' }}
      />
      <Grid
        container
        sx={{ p: '10px' }}
        spacing={{ md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <Grid
                item
                xs={2}
                sm={2}
                md={3}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                <ListItem
                  key={value}
                  sx={{
                    backgroundColor: 'lightgrey',
                    border: 'solid 2px black',
                    borderRadius: '10px',
                  }}
                  secondaryAction={
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    <Checkbox
                      edge="start"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <EventSeatIcon />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`A/${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              </Grid>
            );
          },
        )}
        <br />
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="orange">
          Confirmar Selección
        </Button>
      </Box>
    </Container>
  );
};

export default Asiento;
