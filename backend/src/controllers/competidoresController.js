/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as CompetidoresService from '../services/competidoresService';

export async function getCompetidores(request, response) {
  const competidores = await CompetidoresService.getCompetidores();
  console.log(competidores);
  return response.json(competidores);
}

export async function getCompetidorById(request, response) {
  const { id } = request.params;
  const competidor = await CompetidoresService.getCompetidorById(id);
  console.log(competidor);
  return response.json(competidor);
}

export async function createCompetidor(request, response) {
  const data = request.body;
  const competidor = await CompetidoresService.createCompetidor(data);
  console.log(competidor);
  return response.status(204).json(competidor);
}

export async function updateCompetidor(request, response) {
  const { id } = request.params;
  const data = request.body;
  const formatedData = { id, ...data };
  console.log(formatedData);
  const competidor = await CompetidoresService.updateCompetidor(formatedData);
  return response.json(competidor);
}

export async function deleteCompetidor(request, response) {
  const { id } = request.params;
  const competidor = await CompetidoresService.deleteCompetidor({ id });
  return response.status(204).json(competidor);
}
