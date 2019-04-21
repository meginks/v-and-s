
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('letter_topics', table => {
      table.increments();

      table.integer('letter_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('letters')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

      table.integer('topic_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('topics')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('letter_topics');
};

// This creates a topics in each letter table with a topic id FK and a letter id FK