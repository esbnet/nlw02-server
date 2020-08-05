/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', table =>{
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}


