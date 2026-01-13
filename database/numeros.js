import * as SQLite from 'expo-sqlite';

let db = null;
let inicializado = false;

const openDB = async () => {
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
    CREATE TABLE IF NOT EXISTS numeros (
        id INTEGER PRIMARY KEY,
        doutor TEXT,
        num_doutor TEXT,
        emergencia TEXT,
        num_emergencia TEXT
    );
    `);

    console.log("Tabela 'numeros' criada/verificada.");

    // Cria 1 linha fixa (id=1)
    await db.runAsync(
        `INSERT OR IGNORE INTO numeros (id) VALUES (?);`,
        [1]
    );

    console.log("Linha inicial criada na tabela 'numeros'.");
    const result = await db.getAllAsync(`SELECT * FROM numeros;`);
    
    inicializado = true;  // Foi inicializado
    console.log("Conteúdo da tabela após iniciar:", result);
};

//Muda a informação do numero
export const setNumero = async (doutor, numDoutor, emergencia, numEmergencia) => {
    await iniciar();
    const db = await openDB();

    await db.runAsync(
        `UPDATE numeros SET doutor=?, num_doutor=?, emergencia=?, num_emergencia=? WHERE id=1`,
        [doutor, numDoutor, emergencia, numEmergencia]
    );
    console.log(`Dados atualizados`);
};

//Pegar informações do número
export const getNumero = async () => {
    await iniciar();
    const db = await openDB();

    const result = await db.getAllAsync(`SELECT * FROM numeros;`);

    console.log("Dados obtidos de 'numeros':", result);
    return result;
};