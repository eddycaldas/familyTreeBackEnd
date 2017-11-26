
exports.up = function(knex, Promise) {
  return knex.schema.createTable('individuals', function(table) {
    table.increments('id')
    table.text('first_name')
    table.text('last_name')
    table.text('genderMF')
    table.text('place_of_birth')
    table.date('birthday')
    table.text('other_individual_details')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('individuals')
};
