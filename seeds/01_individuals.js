
exports.seed = function(knex, Promise) {
  return knex('individuals').del()
    .then(function () {
      return knex('individuals').insert([
        {
          id: 1,
          first_name: "Eddy",
          last_name: "Caldas",
          genderMF: 'male',
          place_of_birth: "Lima, Peru",
          birthday: '10/06/1973',
          other_individual_details:  "Like ceviche"
        },
        { 
          id: 2,
          first_name: "Erica",
          last_name: "Caldas",
          genderMF: 'Female',
          place_of_birth: "Ohio, USA",
          birthday: '10/20/1987',
          other_individual_details:  "Like Pizza"
        }
      ]);
    });
};
