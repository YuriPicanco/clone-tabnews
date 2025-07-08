import database from "../../../../infra/database.js";

async function status(request, response) {
   //console.log("database: " + database.query);
   const result = await database.query("SELECT 1+1 as result");
   console.log(result.rows);

   response.status(200).json({ status: "Online" });
}

export default status;
