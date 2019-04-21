
exports.up = function(knex, Promise) {
  return knex.schema 
  
  .createTable('people', function(table) {
      table.increments();
      table 
      .string('name')
      .notNullable();
      
      table 
      .integer('birth year', 4)
      .notNullable();

      table 
      .integer('death year', 4)
      .notNullable();

      table
      .string('relationship to Sacco')
      .notNullable();

      table 
      .string('relationship to Vanzetti')
      .notNullable();

      table 
      .string('notes')
      .notNullable();
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('people');
};

// This creates the People Table for commentary items with birth year, death year, relationship to Sacco, relationship to Vanzetti, and notes.