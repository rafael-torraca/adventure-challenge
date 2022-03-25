/* eslint-disable camelcase */
/* eslint-disable no-multi-str */
import query from '../repository/repository';

function validarData(dataCorrida) {
  const receivedDate = new Date(dataCorrida).getTime();
  const nowDate = new Date().getTime();
  if (receivedDate > nowDate) {
    return false;
  }
  return true;
}

export async function createHistoricoService(historico) {
  const {
    competidor_id, pista_corrida_id, data_corrida, tempo_gasto,
  } = historico;
  const dataCorridaValida = validarData(data_corrida);
  if (!dataCorridaValida) {
    return { message: 'Data futura inválida' };
  }
  const data = await query(
    'INSERT INTO historico_corrida \
    (competidor_id, pista_corrida_id, data_corrida, tempo_gasto) \
    VALUES (?, ?, ?, ?);',
    [competidor_id, pista_corrida_id, dataCorridaValida, tempo_gasto],
  );

  return data;
}

export async function updateHistoricoService(historico) {
  const {
    id,
    competidor_id,
    pista_corrida_id,
    data_corrida,
    tempo_gasto,
  } = historico;
  const dataCorridaValida = validarData(data_corrida);
  if (!dataCorridaValida) {
    return { message: 'Data futura inválida!' };
  }
  const data = await query(
    'UPDATE historico_corrida \
    SET competidor_id = ?, pista_corrida_id = ?, data_corrida = ?, tempo_gasto = ? \
    WHERE id = ?',
    [competidor_id, pista_corrida_id, dataCorridaValida, tempo_gasto, id],
  );

  return data;
}

export async function getHistoricoService() {
  const data = await query(
    'SELECT * FROM historico_corrida',
  );

  return data;
}

export async function getHistoricoByIdService(historicoId) {
  const data = await query(
    'SELECT * FROM historico_corrida as h WHERE h.id = ?',
    [historicoId],
  );

  return data;
}
