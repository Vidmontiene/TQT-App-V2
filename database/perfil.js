import * as SQLite from 'expo-sqlite';

// Abre (ou cria) o banco
export const openDB = async () => {
  const db = await SQLite.openDatabaseAsync('MeuBanco.db');
  console.log('Banco de dados aberto');
  return db;
};

// Inicializa o banco (cria tabelas + linha inicial)
export const iniciar = async () => {
    
  const db = await openDB();

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS perfil (
      id INTEGER PRIMARY KEY,
      nome_responsavel TEXT,
      email TEXT,
      telefone TEXT,
      nome_crianca TEXT,
      data TEXT,
      patologia TEXT
    );
  `);
  console.log("Tabela 'perfil' criada/verificada.");

  // Cria 1 linha fixa (id=1)
  await db.runAsync(
    `INSERT OR IGNORE INTO perfil (id) VALUES (?);`,
    [1]
  );
  console.log("Linha inicial criada na tabela 'perfil'.");
  const result = await db.getAllAsync(`SELECT * FROM perfil;`);
  console.log("Conteúdo atual da tabela:", result);
  await db.closeAsync();
};

// Atualiza um campo da tabela da cânula
export const setPerfil = async (campo, valor) => {
  const db = await openDB();

  await db.runAsync(
    `UPDATE perfil SET ${campo} = ? WHERE id = 1;`,
    [valor]
  );

  console.log(`Campo '${campo}' atualizado para: ${valor}`);
  await db.closeAsync();
};


// Retorna todos os dados da tabela da cânula
export const getPerfil = async () => {
  const db = await openDB();
  const result = await db.getAllAsync(`SELECT * FROM perfil;`);
  console.log("Dados retornados:", result);
  return result;
};
