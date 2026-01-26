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
        CREATE TABLE IF NOT EXISTS agenda (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT,
            hora TEXT, 
            atividade TEXT,
            obs TEXT,
            notificacao TEXT,
            aviso INTEGER
        );
    `);

    console.log("Tabela 'agenda' criada/verificada.");
    inicializado = true;  // Foi inicializado
};

//Inserir novo registro
export const novoRegistro = async ( data, hora, atividade, obs, notificacao, aviso ) => {
    await iniciar();
    const db = await openDB();

    await db.runAsync(`
        INSERT INTO agenda (data, hora, atividade, obs, notificacao, aviso) VALUES (?, ?, ?, ?, ?, ?);`,
        [data, hora, atividade, obs, notificacao ?? null, aviso]
    );

    console.log("Conteúdo inserido com sucesso!");
};

// Atualiza um campo da tabela da agenda
export const setAgenda = async ( campo, valor, id ) => {
    await iniciar();
    const db = await openDB();

    await db.runAsync(
        `UPDATE agenda SET ${campo} = ? WHERE id = ?;`,
        [valor, id]
    );

    console.log(`Campo '${campo}' atualizado para: ${valor} no id '${id}'`);
};

//Pegar informações da agenda (ordena por data crescente e depois hora crescente)
export const getAgenda = async () => {
    await iniciar();
    const db = await openDB();

    const result = await db.getAllAsync(`
        SELECT * FROM agenda ORDER BY substr(data, 7, 4) || '-' || substr(data, 4, 2) || '-' || substr(data, 1, 2) ASC, hora ASC;
    `)

    console.log("Dados obtidos de 'agenda':", result);
    return result;
};

//Deletar Registro
export const deletarRegistroDB  = async ( id ) => {
    await iniciar();
    const db = await openDB();

    await db.execAsync(`
        DELETE FROM agenda WHERE id = '${id}'
    `)
    console.log(`registro de id ${id} deletado.`);
}

