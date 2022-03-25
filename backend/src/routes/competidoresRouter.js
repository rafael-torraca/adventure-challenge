import { Router } from 'express';
import {
  getCompetidores, getCompetidorById, createCompetidor,
  updateCompetidor, deleteCompetidor,
} from '../controllers/competidoresController';

const competidoresRouter = Router();

competidoresRouter.get('/', getCompetidores);
competidoresRouter.get('/:id', getCompetidorById);
competidoresRouter.post('/', createCompetidor);
competidoresRouter.put('/:id', updateCompetidor);
competidoresRouter.delete('/:id', deleteCompetidor);

export default competidoresRouter;
