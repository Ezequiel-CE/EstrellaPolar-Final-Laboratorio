import { Router } from 'express';
import {
  obtenerPasajeros,
  obtenerPasajero,
  editarPasajero,
  eliminarPasajero,
  crearPasajero,
} from '../controllers/pasajero.controller.js';

const pasajeroRouter = Router();

pasajeroRouter.get('/adm/', obtenerPasajeros);
pasajeroRouter.post('/post/', crearPasajero);
pasajeroRouter
  .route('/adm/:id')
  .get(obtenerPasajero)
  .patch(editarPasajero)
  .delete(eliminarPasajero);

export default pasajeroRouter;
