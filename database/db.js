import dotenv from 'dotenv'; // Importando
import * as mysql from "mysql2/promise";

dotenv.config(); // Carregando arquivo .env com as variáveis de ambiente;

export async function connect() {
  if (global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,  // database name
  });

  try {
    global.connection = connection;
    console.log("Conectado");
    return global.connection;
  } catch (err) {
    console.log(err);
  }
}