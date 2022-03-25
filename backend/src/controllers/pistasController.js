/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as PistasService from '../services/pistasService';

export async function getPistas(request, response) {
  const pistas = await PistasService.getPistas();
  console.log(pistas);
  return response.status(200).json(pistas);
}

export async function getPistaById(request, response) {
  console.log(request.params);
  const { id } = request.params;
  const pista = await PistasService.getPistaById(id);
  return response.status(200).json(pista);
}

export async function createPista(request, response) {
  const data = request.body;
  const pista = await PistasService.createPista(data);
  return response.status(204).json(pista);
}

export async function updatePista(request, response) {
  const { id } = request.params;
  const { descricao } = request.body;
  const pista = await PistasService.updatePista({ id, descricao });
  return response.status(204).json(pista);
}

export async function deletePista(request, response) {
  const { id } = request.params;
  const pista = await PistasService.deletePista({ id });
  return response.status(204).json(pista);
}
