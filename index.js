import * as db from './database/db.js';
import { selectCustomers, insertCustomers, deleteCustomers, updateCustomers } from './database/databaseContext.js'
import { selectProducts, insertProducts, deleteProducts, updateProducts } from './database/databaseProdutos.js'


// Starting Immediately invoked function expression (IIFE)

(async () => {
  db.connect();
  console.log('Starting Connection');


  /* CRUD DE CLIENTES */
  console.log('Using: INSERT INTO clientes');
  const result = await insertCustomers({ nome: 'Arthur', idade: 18, uf: "RJ" });
  console.log(result);

  console.log('Using: SELECT * FROM clientes');
  const clientes = await selectCustomers();
  console.log(clientes);

  console.log('Using: UPDATE clientes');
  const result2 = await updateCustomers(4, { nome: 'Zé José', idade: 19, uf: "SP" });
  console.log(result2);

  console.log('Using: DELETE FROM clientes');
  const result3 = await deleteCustomers(5);
  console.log(result3);

  /* CRUD DE PRODUTOS */

  console.log('Using: INSERT INTO produtos');
  const result_products = await insertProducts({ nome_produto: 'xbox', preco_produto: 3000, id_comprador: 1 });
  console.log(result_products);

  console.log('Using: INSERT INTO produtos');
  const result_products2 = await insertProducts({ nome_produto: 'Playstation', preco_produto: 7000, id_comprador: null });
  console.log(result_products2);

  console.log('Using: SELECT * FROM produtos');
  const produtos = await selectProducts();
  console.log(produtos);

  console.log('Using: UPDATE produtos');
  const result2_products = await updateProducts(2, { nome: 'Playstation 5', preco_produto: 7500, id_comprador: null });
  console.log(result2_products);

  console.log('Using: DELETE FROM produtos');
  const result3_products = await deleteProducts(2);
  console.log(result3_products);

  console.log('Using: SELECT * FROM produtos');
  const produtos2 = await selectProducts();
  console.log(produtos2);


})();