
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('places', function(table) {
      table.increments();

      table
      .string('name')
      .notNullable();

      table
      .string('description')
      .notNullable()

      table
      .string('location')
      .notNullable();


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('places');
};

// This table creates the Places table for commentary items with name, description, and location 

