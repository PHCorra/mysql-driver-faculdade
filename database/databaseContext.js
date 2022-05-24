import * as db from './db.js';

export async function selectCustomers() {
  try {
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function insertCustomers(customer) {
  try {
    const conn = await db.connect();
    const sql = 'INSERT INTO clientes(nome, idade, uf) VALUES (?, ?, ?);';
    const values = [customer.nome, customer.idade, customer.uf];
    return await conn.query(sql, values);
  } catch (error) {
    console.log(error);
  }
}


export async function updateCustomers(id, customer) {
  try {
    const conn = await db.connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCustomers(id) {
  try {
    const conn = await db.connect();
    //const sql = `DELETE FROM clientes WHERE id = ${id}`; USING TEMPLATE STRINGS
    //console.log(`Customer with id ${id} was deleted, name ${id.nome}`); USING TEMPLATE STRINGS
    //return await conn.query(sql); USING TEMPLATE STRINGS

    const sql = 'DELETE FROM clientes where id=?';
    return await conn.query(sql, [id]);
  } catch (error) {
    console.log(error)
  }
}