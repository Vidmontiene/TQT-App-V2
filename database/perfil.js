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

  // erro se nao abrir o db
  if (!db){
    console.log('Erro ao abrir o db em iniciar');
    return;
  }

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

  inicializado = true;  // Foi inicializado
  console.log("Conteúdo atual da tabela:", result);
};

// Atualiza um campo da tabela da cânula
export const setPerfil = async (campo, valor) => {
  await iniciar();
  const db = await openDB();

  // erro se nao abrir o db
  if (!db){
    console.log('Erro ao abrir o db em SetPerfil');
    return;
  }

  const camposPermitidos = [
    "nome_responsavel",
    "email",
    "telefone",
    "nome_crianca",
    "data",
    "patologia"
  ];

  // Erro se o campo nao é perimitido
  if (!camposPermitidos.includes(campo)) {
    console.log(`Campo não permitido: ${campo}`);
    return;
  }

  await db.runAsync(
    `UPDATE perfil SET ${campo} = ? WHERE id = 1;`,
    [valor]
  );

  console.log(`Campo '${campo}' atualizado para: ${valor}`);
};


// Retorna todos os dados da tabela da cânula
export const getPerfil = async () => {
  await iniciar();
  const db = await openDB();

  // erro se nao abrir o db
  if (!db){
    console.log('Erro ao abrir o db em getPerfil');
    return;
  }

  const result = await db.getAllAsync(`SELECT * FROM perfil;`);
  console.log("Dados retornados:", result);
  return result;
};
