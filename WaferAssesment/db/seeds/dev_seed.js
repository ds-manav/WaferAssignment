/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex.raw('TRUNCATE TABLE "User" CASCADE')
  // Deletes ALL existing entries
  await knex('User').del()
  await knex('User').insert([
    {id: 1, firstname: 'Manav',lastname:"Pathak",email:"manav.pathak.2001@gmail.com",phone:9755950396},
    {id: 2, firstname: 'Manav',lastname:"Pathak",email:"manav.pathak.2001@gmail.com",phone:9755950396},
    {id: 3, firstname: 'Manav',lastname:"Pathak",email:"manav.pathak.2001@gmail.com",phone:9755950396},
      
  ]);
};
