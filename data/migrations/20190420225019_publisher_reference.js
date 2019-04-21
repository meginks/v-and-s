
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('publisher_reference', table => {

    table.increments();

    table.integer('pub_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('publishers')
    .onDelete('CASCADE')
    .onUPDATE('CASCADE');

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
  return knex.schema.dropTableIfExists('publisher_reference');
};

// this creates a table of the publisher and their references in the bibliography 

