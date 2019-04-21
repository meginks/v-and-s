const db = require('../dbConfig.js'); 

const places = db('places'); 

function get() {
    return places;
}

function getById(id) {
    return places
    .where({id})
    .first()
} 

function insert(place) {
    return places 
    .insert(place)
    .then(ids => {
        return getById(ids[0])
    });
}

function update(id, changes) {
    return places
    .where({id})
    .update(changes);
}

function remove(id) {
    return places
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