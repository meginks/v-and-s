const db = require('../dbConfig.js'); 

const ideas = db('ideas'); 

function get() {
    return ideas;
}

function getById(id) {
    return ideas
    .where({id})
    .first()
} 

function insert(idea) {
    return ideas 
    .insert(idea)
    .then(ids => {
        return getById(ids[0])
    });
}

function update(id, changes) {
    return ideas
    .where({id})
    .update(changes);
}

function remove(id) {
    return ideas 
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