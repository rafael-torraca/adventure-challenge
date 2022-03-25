import query from '../repository/repository';

export async function getPistas() {
  const data = await query(
    'SELECT * FROM pista_corrida',
  );

  return data;
}

export async function getPistaById(pistaId) {
  const data = await query(
    'SELECT * FROM pista_corrida as p WHERE p.id = ?;',
    [pistaId],
  );

  return data;
}

export async function createPista(pista) {
  const data = await query(
    'INSERT INTO pista_corrida (descricao) VALUES (?);',
    [pista.descricao],
  );

  return data;
}

export async function updatePista(pista) {
  const { id, descricao } = pista;
  const data = await query(
    'UPDATE pista_corrida SET descricao = ? WHERE id = ?;',
    [descricao, id],
  );

  return data;
}

export async function deletePista(pista) {
  const { id } = pista;
  const data = await query(
    'DELETE FROM pista_corrida WHERE id = ?;',
    [id],
  );

  return data;
}
