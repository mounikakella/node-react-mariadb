import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "database",
  connectionLimit: 5,
  queueLimit: 30,
  acquireTimeout: 1000000,
});

async function query(sql, params = []) {
  const conn = await pool.getConnection();
  const results = await conn.query(sql, params);
  conn.end();
  return results;
}

async function batch(sql, params = []) {
  const conn = await pool.getConnection();
  const results = await conn.batch(sql, params);
  conn.end();
  return results;
}

async function dbSetup() {
  await query("DROP TABLE IF EXISTS users;");
  await query(
    "CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name char(30),  email char(30), password char(30), role char(30), PRIMARY KEY(id))"
  );
  await batch("INSERT INTO users values(?,?,?,?,?)", [
    [1, "James", "James@123.com", "1!23#4", "EMPLOYEE"],
    [2, "Peter", "Peter@123.com", "8^23!3", "EMPLOYEE"],
    [3, "John", "John@123.com", "98!891", "ADMIN"],
    [4, "Fred", "Fred@123.com", "68651", "ADMIN"],
  ]);
}

dbSetup()
  .then((_res) => console.log("initial setup done"))
  .catch((e) => console.log("connection error"));

export default { query, batch, dbSetup };
export { dbSetup, query, batch };
