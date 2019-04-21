
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('authors', table => {
      table.increments();

      table.string('first_name')
      .notNullable();

      table.string('last_name')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('authors');
};

// This creates a table of authors' first and last names 
