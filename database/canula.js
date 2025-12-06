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
    CREATE TABLE IF NOT EXISTS canula (
      id INTEGER PRIMARY KEY,
      tipo TEXT,
      balao INTEGER,
      tamanho REAL,
      material INTEGER,
      marca TEXT,
      data TEXT
    );
  `);
  console.log("Tabela 'canula' criada/verificada.");

  // Cria 1 linha fixa (id=1)
  await db.runAsync(
    `INSERT OR IGNORE INTO canula (id) VALUES (?);`,
    [1]
  );
  console.log("Linha inicial criada na tabela 'canula'.");
  const result = await db.getAllAsync(`SELECT * FROM canula;`);
  console.log("Conteúdo atual da tabela:", result);
};

// Atualiza um campo da tabela da cânula
export const setCanula = async (campo, valor) => {
  const db = await openDB();

  await db.runAsync(
    `UPDATE canula SET ${campo} = ? WHERE id = 1;`,
    [valor]
  );

  console.log(`Campo '${campo}' atualizado para: ${valor}`);
};


// Retorna todos os dados da tabela da cânula
export const getCanula = async () => {
  const db = await openDB();
  const result = await db.getAllAsync(`SELECT * FROM canula;`);
  console.log("Dados retornados:", result);
  return result;
};

