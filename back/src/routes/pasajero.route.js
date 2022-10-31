import { Router } from 'express';
import {
  obtenerPasajeros,
  obtenerPasajero,
  editarPasajero,
  eliminarPasajero,
  crearPasajero,
} from '../controllers/pasajero.controller.js';

const pasajeroRouter = Router();

pasajeroRouter.get('/', obtenerPasajeros);
pasajeroRouter.post('/', crearPasajero);
pasajeroRouter
  .route('/:id')
  .get(obtenerPasajero)
  .patch(editarPasajero)
  .delete(eliminarPasajero);

export default pasajeroRouter;
