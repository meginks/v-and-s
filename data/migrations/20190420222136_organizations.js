
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('organizations', table => {
      table.increments();

      table.string('org_name')
      .notNullable();

      table.integer('org_formation_year', 4)
      .notNullable();

      table.text('notes')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('organizations');
};

// This creates a Table for Organizations where there is a organization name, organization formation date, and notes 

