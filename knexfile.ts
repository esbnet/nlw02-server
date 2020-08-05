/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/

import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'src', 'database', 'database.sqlite')
    },
    migrations:{
        directory:path.resolve(__dirname,'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};