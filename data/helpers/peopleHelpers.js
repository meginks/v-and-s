const db = require('../dbConfig.js'); 

const people = db('people'); 

function get() {
    return people;
}

function getById(id) {
    return people
    .where({id})
    .first()
} 

function insert(person) {
    return people 
    .insert(person)
    .then(ids => {
        return getById(ids[0])
    });
}

function update(id, changes) {
    return people
    .where({id})
    .update(changes);
}

function remove(id) {
    return people 
    .where('id', id)
    .del()
}

module.exports = { 
    get, 
    getById,
    insert,
    update,
    remove
}