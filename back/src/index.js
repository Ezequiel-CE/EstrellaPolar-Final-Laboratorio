import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import db from './configs/database.js';

import authRouter from './routes/auth.route.js';
import routerVuelo from './routes/vuelo.route.js';
import pasajeroRouter from './routes/pasajero.route.js';
import routerPasaje from './routes/pasaje.route.js';
import routerAvion from './routes/avion.route.js';
import routerAvionVuelo from './routes/avion_vuelo.route.js';
import routerPasajeVuelo from './routes/pasaje_vuelo.route.js';
import pasajeroCompraPasajeRouter from './routes/pasajero_compra_pasaje.route.js';
import cuentaPasajeroRouter from './routes/cuenta_pasajero.route.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// eslint-disable-next-line import/first
import './configs/auth.js';

app.use('/API/auth', authRouter);
app.use('/API/itinerario', routerVuelo);
app.use('/API/pasajeros', pasajeroRouter);
app.use('/API/pasaje', routerPasaje);
app.use('/API/avion', routerAvion);

app.use('/API/rpv', routerPasajeVuelo);
app.use('/API/rav', routerAvionVuelo);
app.use('/API/rpcp', pasajeroCompraPasajeRouter);
app.use('/API/rcp', cuentaPasajeroRouter);

app.get('/', (_, res) => {
  res.send('API GO');
});

app.use('*', (_, res) => {
  res.status(404).send('<h1>OPS! the endpoint does not exist :(</h1>');
});

app.listen(port, async () => {
  try {
    await db.authenticate();
    console.info('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
