
exports.up = function(knex, Promise) {
 return knex.schema
  .createTable('mss_locations', table => {
      table.increments();

      table.string('city')
      .notNullable();
      
      table.string('state or province')
      .notNullable();

      table.string('country')
      .notNullable();

      table.string('name of location')
      .notNullable()

      table.string('website')
      .notNullable()

      table.text('access_info')
      .notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('mss_locations');
};

// Creates a table of manuscript locations where S&V's letters are kept
// city
// state or province
// country
// name of location
// website 
// Access Information
