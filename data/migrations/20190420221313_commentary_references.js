
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('people_refs', table => {
    table.increments();
    
    table.integer('person_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('people')
    .onDelete('CASCADE')
    .onUpdate('CASCADE'); 

    table.integer('ref_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bibliography')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
  .createTable('orgs_refs', table => {
    table.increments();

    table.integer('org_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('organizations')
    .onDelete('CASCADE')
    .onUpdate('CASCADE'); 


    table.integer('ref_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bibliography')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

  })
  .createTable('things_refs', table => {
    table.increments();

    table.integer('thing_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('things')
    .onDelete('CASCADE')
    .onUpdate('CASCADE'); 


    table.integer('ref_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bibliography')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  })
  .createTable('places_refs', table => {
    table.increments();

    table.integer('place_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('places')
    .onDelete('CASCADE')
    .onUpdate('CASCADE'); 


    table.integer('ref_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bibliography')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  })
  .createTable('ideas_refs', table => {
    table.increments();

    table.integer('idea_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ideas')
    .onDelete('CASCADE')
    .onUpdate('CASCADE'); 


    table.integer('ref_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('bibliography')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('ideas_refs')
  .dropTableIfExists('places_refs')
  .dropTableIfExists('things_refs')
  .dropTableIfExists('orgs_refs')
  .dropTableIfExists('people_refs')
};

// this creates the commentary references tables
// it creates a people references table, where it includes a person id FK and a reference id FK
// it includes a organization references table where there is an organization id FK and a reference id FK 
// it includes a things references table where there is a thing id FK and a reference id FK
// it includes an ideas references table where there is an idea id FK and a reference id FK
// it includes a places references table where there is a place id FK and a reference id FK

