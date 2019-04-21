
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('org_members', table => {
        table.increments();

        table.integer('org_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('organizations')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
        
        table.integer('person_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('people')
        .onDelete('CASCADE')
        .onUpdate('CASCADE'); 
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('org_members');
};

// This creates an Organizations People Table that contains the membership for each org. 
// people ID 
// organization ID

