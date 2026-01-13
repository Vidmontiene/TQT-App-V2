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

//Iniciar as tabelas
export const iniciar = async () => {

    if (inicializado) return; // Se já foi inicializado sai
    const db = await openDB();

    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS lista (
        id INTEGER PRIMARY KEY,
        canula INTEGER,
        fita INTEGER,
        gaze INTEGER,
        solucao INTEGER,
        luva INTEGER,
        aspirador INTEGER,
        sonda INTEGER,
        mascara INTEGER,
        oculos INTEGER
    );
    `);

    console.log("Tabela 'lista' criada/verificada.");

    // Cria 1 linha fixa (id=1)
    await db.runAsync(
        `INSERT OR IGNORE INTO lista (id) VALUES (?);`,
        [1]
    );

    console.log("Linha inicial criada na tabela 'lista'.");
    const result = await db.getAllAsync(`SELECT * FROM lista;`);
        inicializado = true;  // Foi inicializado
        console.log("Conteúdo da tabela após iniciar:", result);
    };

//Muda a informação da lista
export const setLista = async (campo, valor) => {

    await iniciar();
    const db = await openDB();

    await db.runAsync(
        `UPDATE lista SET ${campo} = ? WHERE id = 1;`,
        [valor]
    );
    console.log(`${campo} atualizado para: ${valor}`);
};

//Pegar informações da canula
export const getLista = async () => {
    await iniciar();
    const db = await openDB();

    const result = await db.getAllAsync(`SELECT * FROM lista;`);

    console.log("Dados obtidos de 'lista':", result);
    return result;
};