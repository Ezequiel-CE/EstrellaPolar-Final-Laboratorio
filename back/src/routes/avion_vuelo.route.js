import { Router } from 'express';
import {
  crearRelacionAvionVuelo,
  verRelacionAvionVuelo,
} from '../controllers/avion_vuelo.controller.js';

const routerAvionVuelo = Router();
routerAvionVuelo.post('/', crearRelacionAvionVuelo);
routerAvionVuelo.get('/av/:id', verRelacionAvionVuelo);

export default routerAvionVuelo;
