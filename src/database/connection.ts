/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/

import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;