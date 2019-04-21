
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('publishers', table => {
      table.increments();

      table.string('publisher_name')
      .notNullable();

      table.string('city')
      .notNullable();

      table.string('state/province')
      .notNullable();

      table.string('country')
      .notNullable();

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('publishers');
};

// this creates a table of publishers with publisher name, city, state/province, and country 

