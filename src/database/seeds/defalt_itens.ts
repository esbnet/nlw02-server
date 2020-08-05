import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([

    { title: 'Lânpadas', image:'lampadas.svg'},
    { title: 'Pilhas e Baterias', image:'baterias.svg'},
    { title: 'Papéis e Papelão', image:'papeis-papelao.svg'},
    { title: 'Resíduos Eletônicos', image:'eletônicos.svg'},
    { title: 'Resíduos Orgânicos', image:'orgânicos.svg'},
    { title: 'Óleo de Cozinha', image:'oleo.svg'},

  ])
}