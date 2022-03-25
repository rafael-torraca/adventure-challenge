import {
  getHistoricoService,
  getHistoricoByIdService,
  createHistoricoService,
  updateHistoricoService,
} from '../services/historicosService';

export async function getCompetidores(request, response) {
  const historicos = await getHistoricoService();
  console.log(historicos);
  return response.json(historicos);
}

export async function getCompetidorById(request, response) {
  const { id } = request.params;
  const historico = await getHistoricoByIdService(id);
  console.log(historico);
  return response.json(historico);
}

export async function createHistorico(request, response) {
  const data = request.body;
  const historico = await createHistoricoService(data);
  return response.status(200).json(historico);
}

export async function updateHistorico(request, response) {
  const { id } = request.params;
  const data = request.body;
  const formatedData = { id, ...data };
  const historico = await updateHistoricoService(formatedData);
  return response.status(200).json(historico);
}
