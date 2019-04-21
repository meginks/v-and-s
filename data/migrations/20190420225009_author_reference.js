
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('author_reference', table => {
      table.increments(); 

      table.integer('author_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('authors')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    
      table.integer('ref_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('biblography')
      .onDelete('CASCADE')
      .onUPDATE('CASCADE');
})
};

exports.down = function(knex, Promise) {
  
};

// this creates a table of authors and their references in the bibliography