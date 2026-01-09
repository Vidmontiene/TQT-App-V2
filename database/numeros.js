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
    CREATE TABLE IF NOT EXISTS numeros (
        id INTEGER PRIMARY KEY,
        doutor TEXT,
        num_doutor INTEGER,
        emergencia TEXT,
        num_emergencia INTEGER
    );
    `);

    console.log("Tabela 'numeros' criada/verificada.");

    await dbConn.execAsync(`
        INSERT OR IGNORE INTO numeros (id) VALUES (1);
    `)

    console.log("Linha inserida em 'numeros'.");
    
    const result = await dbConn.getAllAsync(`SELECT * FROM numeros;`);
    console.log("Conteúdo da tabela após iniciar:", result);
};

//Muda a informação do numero
export const setNumero = async (doutor, numDoutor, emergencia, numEmergencia) => {
    const dbConn = await openDB();

    await dbConn.runAsync(
        `UPDATE numeros SET doutor=?, num_doutor=?, emergencia=?, num_emergencia=? WHERE id=1`,
        [doutor, numDoutor, emergencia, numEmergencia]
    );
    console.log(`Dados atualizados`);
};

//Pegar informações do número
export const getNumero = async () => {

    const dbConn = await openDB();

    const result = await dbConn.getAllAsync(`
        SELECT * FROM numeros;
    `)

    console.log("Dados obtidos de 'numeros':", result);
    return result;
};