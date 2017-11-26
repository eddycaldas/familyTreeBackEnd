
exports.up = function(knex, Promise) {
  return knex.schema.createTable('families', function(table) {
    table.increments('family_id')
    table.text('head_of_family_individual_id')
    table.text('family_name')
    table.text('family_description')
    table.text('other_family_details')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('families')
};
