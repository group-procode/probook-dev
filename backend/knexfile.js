/**
 * Arquivo para configuração de conexão com banco de dados.
 */
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PG_PASSWORD);

module.exports = {
  development: {
    client: "pg",
    version: "^8.5.1",
    connection: {
      host: process.env.PG_HOST,
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
    },
  },
};
