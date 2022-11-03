import { Router } from 'express';
import {
  crearAvion,
  verAvion,
  verVuelosDelAvion,
  verAsientoDisponibles,
} from '../controllers/avion.controller.js';

const routerAvion = Router();

routerAvion.post('/adm/', crearAvion);
routerAvion.get('/adm/:id', verAvion);
routerAvion.get('/adm/:id/vuelos', verVuelosDelAvion);
routerAvion.get('/adm/:id/asiento', verAsientoDisponibles);

export default routerAvion;
