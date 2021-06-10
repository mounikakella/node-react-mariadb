import { dbSetup, query, batch } from "../db";
import sortBy from "../util";

async function getUsers(id) {
  let sqlQuery = "SELECT * FROM users ";
  if (id !== null) sqlQuery += `WHERE id=${id}`;
  try {
    const users = await query(sqlQuery);
    delete users.meta;
    const res = await sortBy(users, "name");
    return res;
  } catch (e) {
    return e;
  }
}

async function authenticate(email, password) {
  const sqlQuery = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;
  console.log(sqlQuery);
  try {
    const users = await query(sqlQuery);
    delete users.meta;
    return users;
  } catch (e) {
    return e;
  }
}
export { getUsers, authenticate };
