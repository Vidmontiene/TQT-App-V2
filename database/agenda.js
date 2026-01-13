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

    await dbConn.execAsync(`
        CREATE TABLE IF NOT EXISTS agenda (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT,
            hora TEXT, 
            atividade TEXT 
        );
    `);

    console.log("Tabela 'agenda' criada/verificada.");
    const result = await dbConn.getAllAsync(`SELECT * FROM agenda;`);

    inicializado = true;  // Foi inicializado
    console.log("Conteúdo da tabela após iniciar:", result);
};

//Inserir novo registro
export const novoRegistro = async (data, hora, atividade) => {

    const dbConn = await openDB();

    await dbConn.execAsync(`
        INSERT INTO agenda (data, hora, atividade) VALUES ('${data}', '${hora}', '${atividade}')
    `)

    const result = await dbConn.getAllAsync(`SELECT * FROM agenda;`);
    console.log("Conteúdo da tabela após nova insercao:", result);
};

// Atualiza um campo da tabela da agenda
export const setAgenda = async (campo, valor, id) => {
    await iniciar();
    const db = await openDB();

    await db.runAsync(
        `UPDATE agenda SET ${campo} = ? WHERE id = ?;`,
        [valor, id]
    );

    console.log(`Campo '${campo}' atualizado para: ${valor} no id '${id}'`);
};

//Pegar informações da agenda (ordena por data decrescente e depois hora decrescente)
export const getAgenda = async () => {
    await iniciar();
    const dbConn = await openDB();

    const result = await dbConn.getAllAsync(`
        SELECT * FROM agenda ORDER BY substr(data, 7, 4) || '-' || substr(data, 4, 2) || '-' || substr(data, 1, 2) DESC, hora DESC;
    `)

    console.log("Dados obtidos de 'agenda':", result);
    return result;
};

//Deletar Registro
export const deletarRegistro  = async (id) => {
    await iniciar();
    const dbConn = await openDB();

    await dbConn.execAsync(`
        DELETE FROM agenda WHERE id = '${id}'
    `)
    console.log(`registro de id ${id} deletado.`);
}

