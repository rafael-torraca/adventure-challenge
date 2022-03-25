import { Router } from 'express';
import {
  getPistasUtilizadas,
  getCompetidoresTempoMedio,
  getCompetidoresNaoCorreram,
} from '../controllers/listagemController';

const listagemRouter = Router();

listagemRouter.get('/pistas-utilizadas', getPistasUtilizadas);
listagemRouter.get('/competidores-tm', getCompetidoresTempoMedio);
listagemRouter.get('/competidores-nc', getCompetidoresNaoCorreram);

export default listagemRouter;
