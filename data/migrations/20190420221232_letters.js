
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('letters', table => {
      table.increments();

      table.string('month')
      .notNullable();

      table.integer('date', 2)
      .notNullable();

      table.string('weekday')
      .notNullable();

      table.integer('year', 4)
      .notNullable() 

      table.text('notes')
      .notNullable()

      table.integer('mss_location_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('mss_locations')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {
  
};

// This creates the Letters table with day written, month written, year written, day of week written, current location of manuscript, text(TBD), and notes 


// TBD -- how to connect the actual letter transcriptions themselves 