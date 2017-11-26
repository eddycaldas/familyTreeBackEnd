
exports.seed = function(knex, Promise) {
  return knex('families').del()
    .then(function () {
      return knex('families').insert([
        {
          family_id: 1,
          head_of_family_individual_id: 1,
          family_name: 'Caldas',
          family_description: 'I dont know what to say',
          other_family_details: 'bla bla bla lbalsjas'
        }
      ]);
    });
};
