import { Router } from 'express';
import {
  crearRelacionPasajeVuelo,
  verRelacionPasajeVuelo,
} from '../controllers/pasaje_vuelo.controller.js';

const routerPasajeVuelo = Router();

routerPasajeVuelo.post('/', crearRelacionPasajeVuelo);
routerPasajeVuelo.get('/:id', verRelacionPasajeVuelo);

export default routerPasajeVuelo;
