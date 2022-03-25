import axios from 'axios';



const urlCompetidores = 'http://localhost:3000/competidores'

export const getCompetidores = async (id) => {
  id = id || '';
  return await axios.get(`${urlCompetidores}/${id}`);
}

export const addCompetidores = async (competidor) => {
  return await axios.post(urlCompetidores, competidor);
}

export const editCompetidores = async (id, competidor) => {
  return await axios.put(`${urlCompetidores}/${id}`, competidor)
}

export const deleteCompetidor = async (id) => {
  return await axios.delete(`${urlCompetidores}/${id}`);
}


const urlPistas = 'http://localhost:3000/pistas';

export const getPistas = async (id) => {
  id = id || '';
  return await axios.get(`${urlPistas}/${id}`);
}

export const addPistas = async (pista) => {
  return await axios.post(urlPistas, pista);
}

export const editPistas = async (id, pista) => {
  return await axios.put(`${urlPistas}/${id}`, pista)
}

export const deletePistas = async (id) => {
  return await axios.delete(`${urlPistas}/${id}`);
}


const urlHistoricos = 'http://localhost:3000/historico';

export const getHistoricos = async (id) => {
  id = id || '';
  return await axios.get(`${urlHistoricos}/${id}`);
}

export const addHistoricos = async (pista) => {
  return await axios.post(urlHistoricos, pista);
}

export const editHistoricos = async (id, pista) => {
  return await axios.put(`${urlHistoricos}/${id}`, pista)
}

const urlPistasUtilizadas = 'http://localhost:3000/listagem/pistas-utilizadas';

export const getPistasUtilizadas = async () => {
  return await axios.get(`${urlPistasUtilizadas}`);
}

const urlCompetidoresTempoMedio = 'http://localhost:3000/listagem/competidores-tm';

export const getCompetidoresTempoMedio = async () => {
  return await axios.get(`${urlCompetidoresTempoMedio}`);
}

const urlCompetidoresNaoCorreram = 'http://localhost:3000/listagem/competidores-nc';

export const getCompetidoresNaoCorreram = async () => {
  return await axios.get(`${urlCompetidoresNaoCorreram}`);
}
