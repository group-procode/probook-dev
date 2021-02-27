import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const connectionDb = knex({
  client: "pg",
  connection: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    ssl: true,
  },
});

export default connectionDb;
