
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('things', function(table) {
      table.increments();
      table.string('name')
      .notNullable();

      table.string('description')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('things')
};

// This creates the Things table for commentary items with name and description 
