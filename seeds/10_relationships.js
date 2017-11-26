
exports.seed = function(knex, Promise) {
  return knex('relationships').del()
    .then(function () {
      return knex('relationships').insert([
        {
          family_id : 1,
          individual_1_id : 1,
          individual_2_id : 2,
          relationship_type_code : 1,
          individual_1_role_code : 1,
          individual_2_role_code : 2,
          other_relationship_details : 'Married in Vegas'
        }
      ]);
    });
};
