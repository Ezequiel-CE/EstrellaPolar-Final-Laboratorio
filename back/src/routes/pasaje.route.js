import { Router } from 'express';
import { crearPasaje, VerPasaje } from '../controllers/pasaje.controller.js';

const routerPasaje = Router();

routerPasaje.get('/adm/:id', VerPasaje);
routerPasaje.post('/adm/', crearPasaje);

export default routerPasaje;
