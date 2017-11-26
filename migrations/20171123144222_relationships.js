
exports.up = function(knex, Promise) {
  return knex.schema.createTable('relationships', function(table) {
    table.increments('relationship_id')
    table.text('family_id')
    table.text('individual_1_id')
    table.text('individual_2_id')
    table.text('relationship_type_code')
    table.text('individual_1_role_code')
    table.text('individual_2_role_code')
    table.text('other_relationship_details')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('relationships')
};
