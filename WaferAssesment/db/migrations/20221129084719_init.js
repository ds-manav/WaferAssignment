const { knex } = require("../models/user");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("User",(table)=>{
    table.increments();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();

  })
  .createTable("Otp",(table)=>{
    table.increments();
    table.string("otp_val").notNullable();

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex){
  
  return await knex.schema.dropTableIfExists('User').dropTableIfExists('Otp');
}
