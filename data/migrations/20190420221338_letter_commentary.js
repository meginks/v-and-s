
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('letter_people', table => {
    table.increments();

    table.integer('person_id')
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
  .createTable('letter_orgs', table => {
    table.increments(); 

    table.integer('org_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('organizations')
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
  .createTable('letter_things', table => {
    table.increments(); 

    table.integer('thing_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('things')
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
  .createTable('letter_places', table => {
    table.increments();

    table.integer('place_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('places')
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
  .createTable('letter_ideas', table => {
    table.increments(); 

    table.integer('idea_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('ideas')
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
  return knex.schema
  .dropTableIfExists('letter_ideas')
  .dropTableIfExists('letter_places')
  .dropTableIfExists('letter_things')
  .dropTableIfExists('letter_orgs')
  .dropTableIfExists('letter_people')
};

// this creates the letter commentary tables. 
// It creates the People Mentioned in Letters Table with the Person id FK and the Letter id FK, the Things Mentioned in the Letters Table with the Thing id FK and the Letter id FK, the Ideas Mentioned in the Letters Table with the Idea id FK and the Letter id FK, the Places mentioned in the Letters Table with the Place id FK and the Letter id FK, and the Organizations mentioned in the Letters Table with the Organization id FK and the letter id FK
