import {
  getPistasUtilizadasService,
  getCompetidoresTempoMedioService,
  getCompetidoresNaoCorreramService,
} from '../services/listagemService';

export async function getPistasUtilizadas(request, response) {
  const pistasUtilizadas = await getPistasUtilizadasService();
  return response.json(pistasUtilizadas);
}

export async function getCompetidoresTempoMedio(request, response) {
  const competidoresTempoMedio = await getCompetidoresTempoMedioService();
  return response.json(competidoresTempoMedio);
}

export async function getCompetidoresNaoCorreram(request, response) {
  const pistasUtilizadas = await getCompetidoresNaoCorreramService();
  return response.json(pistasUtilizadas);
}
