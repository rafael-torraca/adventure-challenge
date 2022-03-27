/* eslint-disable no-multi-str */
import query from '../repository/repository';

export async function getPistasUtilizadasService() {
  const data = await query(
    'SELECT \
      historico_corrida.pista_corrida_id, \
      pista_corrida.descricao \
    FROM \
      historico_corrida \
    INNER JOIN \
      pista_corrida ON historico_corrida.pista_corrida_id = pista_corrida.id \
    GROUP BY \
      pista_corrida.descricao;',
  );
  return data;
}

export async function getCompetidoresTempoMedioService() {
  const data = await query(
    'SELECT \
      c.nome, \
      c.sexo, \
      AVG(hc.tempo_gasto) AS media_tempo \
    FROM \
      competidores c \
      JOIN historico_corrida hc ON c.id = hc.competidor_id \
    GROUP BY \
      c.id, \
      c.nome;',
  );

  return data;
}

export async function getCompetidoresNaoCorreramService() {
  const data = await query(
    'SELECT \
    c.id, \
    c.nome \
  FROM \
    competidores c \
  WHERE \
    c.id NOT IN ( \
      SELECT \
        historico_corrida.competidor_id \
      FROM \
        historico_corrida);',
  );

  return data;
}
