
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('relationshipsTypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('relationshipsTypes').insert([
        {
         relationship_type_code: 1,
         relationship_type_description: 'got married'
        }
      ]);
    });
};
