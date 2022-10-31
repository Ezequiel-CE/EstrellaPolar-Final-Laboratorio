import express from 'express';
import morgan from 'morgan';
import db from './configs/database.js';

import authRouter from './routes/auth.route.js';
import routerVuelo from './routes/vuelo.route.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('tiny'));

app.use('/API/auth', authRouter);
app.use('/API/itinerario', routerVuelo);

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
