const db = require('../dbConfig.js'); 
const things = db('things'); 

function get() {
    return things;
}

function getById(id) {
    return things
    .where({id})
    .first()
} 

function insert(thing) {
    return things 
    .insert(thing)
    .then(ids => {
        return getById(ids[0])
    });
}

function update(id, changes) {
    return things
    .where({id})
    .update(changes);
}

function remove(id) {
    return things 
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