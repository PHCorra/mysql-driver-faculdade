import * as db from './database/db.js';
import { selectCustomers, insertCustomers, deleteCustomers, updateCustomers } from './database/databaseContext.js'


// Starting Immediately invoked function expression (IIFE)

(async () => {
  db.connect();
  console.log('Starting Connection');



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

})();