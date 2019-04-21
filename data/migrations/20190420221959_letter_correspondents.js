
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('letter_correspondents', table => {
      table.increments();

      table.integer('to_correspondent')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('people')
      .onDelete('CASCADE')
      .onUpdate('CASCADE'); 

      table.integer('from_correspondent')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('people')
      .onDelete('CASCADE')
      .onUpdate('CASCADE'); 

      table.integer('letter_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('letters')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('letter_correspondents');
};

// This creates a table that establishes the relationship between the correspondents 
// TO Correspondent -- People ID FK 
// FROM correspondent -- People ID FK
// Letter ID 