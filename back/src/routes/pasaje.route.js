import { Router } from 'express';
import {
  crearPasaje,
  VerPasaje,
  encontrarPasaje,
} from '../controllers/pasaje.controller.js';

const routerPasaje = Router();

routerPasaje.get('/adm/:id', VerPasaje);
routerPasaje.post('/adm/', crearPasaje);
routerPasaje.get('/', encontrarPasaje);

export default routerPasaje;
