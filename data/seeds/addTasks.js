
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, task_description: 'answer all questions', task_notes: 'reference tk', project_id: 1, completed: 0 },
        { id: 2, task_description: 'call or email', task_notes: 'reference website', project_id: 2, completed: 0 },
        { id: 3, task_description: ' this old house', task_notes: 'watch tv show', project_id: 3, completed: 0 }
      ]);
    });
};
