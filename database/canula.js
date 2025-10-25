import * as SQLite from 'expo-sqlite';

const openDB = async () => {
    try{
        const db = await SQLite.openDatabaseAsync('MeuBanco.db');
        console.log("Banco de dados aberto");
        return db;
    }
    catch(error){
        console.log('erro ao abiri o db')
    }
};

//Iniciar as tabelas
export const iniciar = async () => {

    try{
    const dbConn = await openDB();

    await dbConn.execAsync(`
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

    await dbConn.execAsync(`
        INSERT OR IGNORE INTO canula (id) VALUES (1);
    `)

    console.log("Linha inserida em 'canula'.");
    
    const result = await dbConn.getAllAsync(`SELECT * FROM canula;`);
    console.log("Conteúdo da tabela após iniciar:", result);
    }
    catch(error){
        console.log('erro ao iniciar')
    }
};

//Muda a informação da cânula
export const setCanula = async (campo, valor) => {
    const dbConn = await openDB();

    await dbConn.runAsync(
        `UPDATE canula SET ${campo} = ? WHERE id = ?;`,
        [valor, 1]
    );
    console.log(`${campo} atualizado para: ${valor}`);
};


//Pegar informações da canula
export const getCanula = async () => {

    const dbConn = await openDB();

    const result = await dbConn.getAllAsync(`
        SELECT * FROM canula;
    `)

    console.log("Dados obtidos de 'canula':", result);
    return result;
}
