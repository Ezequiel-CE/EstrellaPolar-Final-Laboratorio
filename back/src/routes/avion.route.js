import { Router } from 'express';
import {
  crearAvion,
  verAvion,
  verVuelosDelAvion,
  getAsientosLibres,
} from '../controllers/avion.controller.js';

const routerAvion = Router();

routerAvion.post('/adm/', crearAvion);
routerAvion.get('/adm/:id', verAvion);
routerAvion.get('/adm/:id/vuelos', verVuelosDelAvion);
// routerAvion.get('/adm/:id/asiento', verAsientoDisponibles);
routerAvion.post('/asientos', getAsientosLibres);

export default routerAvion;
