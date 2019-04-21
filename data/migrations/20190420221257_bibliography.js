
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('bibliography', table => {
      table.increments();
      
      table.text('title')
      .notNullable();

      table.integer('pub_year', 4)
      .notNullable();

      table.string('format')
      .notNullable();

      table.string('language')
      .notNullable();

      table.string('online_link')
      .notNullable();

  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('bibliography');  
};

// this creates the Bibliography table, i.e. the references table. 
// it includes the title, the format (is it a book, movie, website, pamphlet, journal article, etc), the language (English, Italian, Spanish, etc), and a link for online access or to where it can be located (like a library website). 

