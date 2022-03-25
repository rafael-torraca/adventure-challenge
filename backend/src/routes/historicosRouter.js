import { Router } from 'express';
import {
  createHistorico,
  updateHistorico,
  getCompetidores,
  getCompetidorById,
} from '../controllers/historicosController';

const historicosRouter = Router();

historicosRouter.get('/', getCompetidores);
historicosRouter.get('/:id', getCompetidorById);
historicosRouter.post('/', createHistorico);
historicosRouter.put('/:id', updateHistorico);

export default historicosRouter;
