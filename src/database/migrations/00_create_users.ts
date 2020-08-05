/*Next Level Week 2 - |Rocketseet

Edmilson Soares
Ago-20202

*/
import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}