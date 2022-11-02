import { Router } from 'express';
import {
  crearRelacionPasajeVuelo,
  verRelacionPasajeVuelo,
} from '../controllers/pasaje_vuelo.controller.js';

const routerPasajeVuelo = Router();

routerPasajeVuelo.post('/adm/', crearRelacionPasajeVuelo);
routerPasajeVuelo.get('/adm/:id', verRelacionPasajeVuelo);

export default routerPasajeVuelo;
