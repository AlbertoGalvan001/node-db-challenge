const db = require('../data/dbConfig');

module.exports = {
    findProjects,
    addProjects
}

function findProjects() {
    return db('projects');
}

function addProjects(project) {
    return db('projects')
        .insert(project)
        .then(ids => {
            return db('projects')
                .where({ id: ids[0] })
                .first()
        })
        .catch(error => {
            console.log(error)
        })
}