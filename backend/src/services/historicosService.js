/* eslint-disable camelcase */
/* eslint-disable no-multi-str */
import query from '../repository/repository';

function validarData(dataCorrida) {
  // TODO: Validar data futura
  return dataCorrida;
}

export async function createHistoricoService(historico) {
  const {
    competidor_id, pista_corrida_id, data_corrida, tempo_gasto,
  } = historico;
  // TODO: corrigir data futura
  const dataCorridaValida = validarData(data_corrida);
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
