
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(table) {
    table.text('role_code')
    table.text('role_description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles')
};
