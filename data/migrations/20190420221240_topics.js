
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('topics', table => {
        table.increments();

        table.string('topic_name')
        .notNullable(); 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('topics');
};

// This creates the topics table with a list of topics
