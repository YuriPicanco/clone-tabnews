import { Client } from "pg";

const db = {
   host: process.env.POSTGRES_HOST,
   port: process.env.POSTGRES_PORT,
   user: process.env.POSTGRES_USER,
   database: process.env.POSTGRES_DB,
   password: process.env.POSTGRES_PASSWORD,
};

async function query(queryObject) {
   const client = new Client(db);
   await client.connect();

   const result = await client.query(
      queryObject,
      //"SELECT ROUND($1::numeric, 2) as Message",[4.0],
   );

   await client.end();

   return result;
}

export default {
   query: query,
};
