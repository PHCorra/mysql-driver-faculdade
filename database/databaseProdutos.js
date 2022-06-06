import * as db from './db.js';

export async function selectProducts() {
  try {
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM produtos;');
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function insertProducts(product) {
  try {
    const conn = await db.connect();
    const sql = 'INSERT INTO produtos(nome_produto, preco_produto, id_comprador) VALUES (?, ?, ?);';
    const values = [product.nome_produto, product.preco_produto, product.id_comprador];
    return await conn.query(sql, values);
  } catch (error) {
    console.log(error);
  }
}


export async function updateProducts(id, product) {
  try {
    const conn = await db.connect();
    const sql = 'UPDATE produtos SET nome_produto=?, preco_produto=?, id_comprador=? WHERE id=?';
    const values = [product.nome_produto, product.preco_produto, product.id_comprador, id];
    return await conn.query(sql, values);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProducts(id) {
  try {
    const conn = await db.connect();
    //const sql = `DELETE FROM clientes WHERE id = ${id}`; USING TEMPLATE STRINGS
    //console.log(`Customer with id ${id} was deleted, name ${id.nome}`); USING TEMPLATE STRINGS
    //return await conn.query(sql); USING TEMPLATE STRINGS
    const sql = 'DELETE FROM produtos where id=?';
    return await conn.query(sql, [id]);
  } catch (error) {
    console.log(error)
  }
}