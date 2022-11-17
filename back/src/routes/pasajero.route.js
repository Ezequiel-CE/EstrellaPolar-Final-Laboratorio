import { Router } from 'express';
import {
  obtenerPasajeros,
  obtenerPasajero,
  editarPasajero,
  eliminarPasajero,
  crearPasajero,
  comprarPasaje,
  cambiarPasaje,
  obtenerPasajerosPorVuelo,
} from '../controllers/pasajero.controller.js';

const pasajeroRouter = Router();

pasajeroRouter.get('/adm/', obtenerPasajeros);
pasajeroRouter.get('/adm/PorVuelo', obtenerPasajerosPorVuelo);

pasajeroRouter.post('/post/', crearPasajero);
pasajeroRouter
  .route('/adm/:id')
  .get(obtenerPasajero)
  .patch(editarPasajero)
  .delete(eliminarPasajero);
pasajeroRouter.post('/comprar', comprarPasaje);
pasajeroRouter.patch('/cambiar', cambiarPasaje);

export default pasajeroRouter;
