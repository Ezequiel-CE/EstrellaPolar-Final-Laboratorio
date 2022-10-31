import { Router } from 'express';
import { crearPasaje, VerPasaje } from '../controllers/pasaje.controller.js';

const routerPasaje = Router();

routerPasaje.get('/:id', VerPasaje);
routerPasaje.post('/', crearPasaje);

export default routerPasaje;
