
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl.string('name', 255)
                .notNullable();

            tbl.string('project_description', 255)
                .notNullable()

            tbl.boolean('completed')
                .defaultTo(0);
        })

        .createTable('resources', tbl => {
            tbl.increments();

            tbl.string('resource_name', 255)
                .notNullable()
                .unique();

            tbl.string('resource_description', 255)
        })

        .createTable('tasks', tbl => {
            tbl.increments();

            tbl.string('task_description', 255)
                .notNullable();

            tbl.string('task_notes', 255)
                .notNullable()

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl.boolean('completed')
                .defaultTo(0);

        })

        .createTable('projects_resources', tbl => {
            tbl.increments();

            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects_resources')
};
