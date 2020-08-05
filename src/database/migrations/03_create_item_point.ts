/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('point_id',10).unsigned().notNullable();
    table.integer('item_id',10).unsigned().notNullable();

    table.foreign('point_id').references('id').inTable('points');

    table.foreign('item_id').references('id').inTable('items');

  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}
