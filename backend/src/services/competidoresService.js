/* eslint-disable camelcase */
/* eslint-disable no-multi-str */
import query from '../repository/repository';

export async function getCompetidores() {
  const data = await query(
    'SELECT * FROM competidores',
  );

  return data;
}

export async function getCompetidorById(competidorId) {
  const data = await query(
    'SELECT * FROM competidores as c WHERE c.id = ?',
    [competidorId],
  );

  return data;
}

export async function createCompetidor(competidor) {
  const {
    nome, sexo,
    temperatura_media_corpo,
    peso, altura,
  } = competidor;

  if (temperatura_media_corpo < 36 || temperatura_media_corpo > 38) {
    return { message: 'Temperatura não aprovada' };
  }

  if ((peso && altura) < 0) return { message: 'Somente valores positivos são permitidos' };

  const sexoOptions = ['M', 'F', 'O', 'm', 'f', 'o'];
  if (!sexoOptions.includes(sexo)) return { message: 'Somente "M", "F" ou "O"' };

  const data = await query(
    'INSERT INTO competidores (nome, sexo, temperatura_media_corpo, peso, altura) VALUES (?, ?, ?, ?, ?);',
    [nome, sexo.toUpperCase(), temperatura_media_corpo, peso, altura],
  );

  return data;
}

export async function updateCompetidor(competidor) {
  const {
    id, nome, sexo,
    temperatura_media_corpo,
    peso, altura,
  } = competidor;

  const data = await query(
    'UPDATE competidores \
    SET nome = ?, sexo = ?, temperatura_media_corpo = ?, peso = ?, altura = ? \
    WHERE id = ?',
    [nome, sexo, temperatura_media_corpo, peso, altura, id],
  );

  return data;
}

export async function deleteCompetidor(competidor) {
  const data = await query(
    'DELETE FROM competidores WHERE id = ?;',
    [competidor.id],
  );

  return data;
}
