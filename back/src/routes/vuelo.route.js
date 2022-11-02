import { Router } from 'express';
import {
  crearVuelo,
  obtenerVuelo,
  obtenerVuelos,
  editarVuelo,
  destruirVuelo,
  obtenerVuelosTratados,
} from '../controllers/vuelo.controller.js';

const routerVuelo = Router();

routerVuelo
  .route('/adm/vuelo/:id')
  .get(obtenerVuelo)
  .patch(editarVuelo)
  .delete(destruirVuelo);
routerVuelo.post('/adm/vuelo', crearVuelo);
routerVuelo.get('/adm/vuelos', obtenerVuelos);
routerVuelo.get('/vuelos', obtenerVuelosTratados);

export default routerVuelo;
