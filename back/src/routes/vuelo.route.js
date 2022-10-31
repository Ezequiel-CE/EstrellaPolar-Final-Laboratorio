import { Router } from 'express';
import {
  crearVuelo,
  obtenerVuelo,
  obtenerVuelos,
  editarVuelo,
  destruirVuelo,
} from '../controllers/vuelo.controller.js';

const routerVuelo = Router();

routerVuelo
  .route('/vuelo/:id')
  .get(obtenerVuelo)
  .patch(editarVuelo)
  .delete(destruirVuelo);
routerVuelo.post('/vuelo', crearVuelo);
routerVuelo.get('/vuelos', obtenerVuelos);

export default routerVuelo;
