import { Router } from 'express';
import {
  crearAvion,
  verAvion,
  verVuelosDelAvion,
} from '../controllers/avion.controller.js';

const routerAvion = Router();

routerAvion.post('/', crearAvion);
routerAvion.get('/:id', verAvion);
routerAvion.get('/:id/vuelos', verVuelosDelAvion);

export default routerAvion;
