
exports.up = function(knex, Promise) {
  return knex.schema.createTable('relationshipsTypes', function(table) {
    table.text('relationship_type_code')
    table.text('relationship_type_description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('relationshipsTypes')
};
