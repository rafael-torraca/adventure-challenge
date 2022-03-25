import { Router } from 'express';
import {
  getPistas, getPistaById, createPista, updatePista, deletePista,
} from '../controllers/pistasController';

const pistasRouter = Router();

pistasRouter.get('/', getPistas);
pistasRouter.get('/:id', getPistaById);
pistasRouter.post('/', createPista);
pistasRouter.put('/:id', updatePista);
pistasRouter.delete('/:id', deletePista);

export default pistasRouter;
