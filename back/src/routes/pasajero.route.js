import { Router } from 'express';
import passport from 'passport';
import {
  obtenerPasajeros,
  obtenerPasajero,
  editarPasajero,
  eliminarPasajero,
  crearPasajero,
  comprarPasaje,
  cambiarPasaje,
  obtenerPasajerosPorVuelo,
  comprarPasajeConCuenta,
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
pasajeroRouter.post('/comprar/cuenta', passport.authenticate('jwt', { session: false }), comprarPasajeConCuenta);

export default pasajeroRouter;
