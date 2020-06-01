
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Complete Sprint', project_description: 'must do it', completed: 0 },
        { id: 2, name: 'Clean House', project_description: 'must do it', completed: 0 },
        { id: 3, name: 'Build House', project_description: 'must do it', completed: 0 }
      ]);
    });
};
