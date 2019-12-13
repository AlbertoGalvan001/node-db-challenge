
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: 'Training Kit', resource_description: 'look online' },
        { id: 2, resource_name: 'Jiffy Maid', resource_description: 'look online' },
        { id: 3, resource_name: 'Blue Prints', resource_description: 'look online' }
      ]);
    });
};
