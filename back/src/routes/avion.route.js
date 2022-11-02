import { Router } from 'express';
import {
  crearAvion,
  verAvion,
  verVuelosDelAvion,
} from '../controllers/avion.controller.js';

const routerAvion = Router();

routerAvion.post('/adm/', crearAvion);
routerAvion.get('/adm/:id', verAvion);
routerAvion.get('/adm/:id/vuelos', verVuelosDelAvion);

export default routerAvion;
