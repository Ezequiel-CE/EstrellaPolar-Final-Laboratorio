import { Router } from 'express';
import { crearAvion, verAvion } from '../controllers/avion.controller.js';

const routerAvion = Router();

routerAvion.post('/', crearAvion);
routerAvion.get('/:id', verAvion);

export default routerAvion;
