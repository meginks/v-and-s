
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('ideas', function(table) {
        table.increments();
        table.string('name')
        .notNullable();
  
        table.string('description')
        .notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ideas')
  };
  
  // This creates the ideas table for commentary items with name and description
  
