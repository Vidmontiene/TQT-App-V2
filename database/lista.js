import * as SQLite from 'expo-sqlite';

const openDB = async () => {
    const db = await SQLite.openDatabaseAsync('MeuBanco.db');
    console.log("Banco de dados aberto");
    return db;
};

//Iniciar as tabelas
export const iniciar = async () => {

    const dbConn = await openDB();

    await dbConn.execAsync(`
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

    await dbConn.execAsync(`
        INSERT OR IGNORE INTO lista (id) VALUES (1);
    `)

    console.log("Linha inserida em 'lista'.");
    
    const result = await dbConn.getAllAsync(`SELECT * FROM lista;`);
    console.log("Conteúdo da tabela após iniciar:", result);
};

//Muda a informação da lista
export const setLista = async (campo, valor) => {
    const dbConn = await openDB();

    await dbConn.runAsync(
        `UPDATE lista SET ${campo} = ? WHERE id = ?;`,
        [valor, 1]
    );
    console.log(`${campo} atualizado para: ${valor}`);
};

//Pegar informações da canula
export const getLista = async () => {

    const dbConn = await openDB();

    const result = await dbConn.getAllAsync(`
        SELECT * FROM lista;
    `)

    console.log("Dados obtidos de 'lista':", result);
    return result;
};