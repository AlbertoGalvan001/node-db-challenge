const db = require('../data/dbConfig');

module.exports = {
    findTasks,
    addTasks
}

function findTasks() {
    return db('tasks')
}

function addTasks(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return db('tasks')
                .where({ id: ids[0] })
                .first()
        })
        .catch(error => {
            console.log(error)
        })
}