const db = require('../data/dbConfig.js');

module.exports = {
    findResources,
    addResources
}

function findResources() {
    return db('resources');
}

function addResources(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return db('resources')
                .where({ id: ids[0] })
                .first()
        })
        .catch(error => {
            console.log(error)
        })
}