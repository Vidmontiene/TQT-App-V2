import * as SQLite from 'expo-sqlite';

let db = null;
let inicializado = false;

// Abre o banco
export const openDB = async () => {
  if (db) return db;

  db = await SQLite.openDatabaseAsync('MeuBanco.db');
  console.log('Banco aberto');
  return db;
};

// Inicializa o banco (cria tabelas + linha inicial)
export const iniciar = async () => {

  if (inicializado) return; // Se já foi inicializado sai
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
  inicializado = true;  // Foi inicializado
};

// Atualiza um campo da tabela da cânula
export const setCanula = async (campo, valor) => {
  await iniciar();
  const db = await openDB();

  await db.runAsync(
    `UPDATE canula SET ${campo} = ? WHERE id = 1;`,
    [valor]
  );

  console.log(`Campo '${campo}' atualizado para: ${valor}`);
};


// Retorna todos os dados da tabela da cânula
export const getCanula = async () => {
  await iniciar();
  const db = await openDB();
  
  const result = await db.getAllAsync(`SELECT * FROM canula;`);
  console.log("Dados retornados:", result);
  return result;
};

