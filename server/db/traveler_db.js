const knex = require("./knex");

function addTraveler(traveler) {
    return knex("Travelers").insert(traveler);
};

function getAllTravelers() {
    return knex("Travelers").select("*");
};

function getTraveler(id) {
    return knex("Travelers").where("id", id).first();
};

function deleteTraveler(id) {
    return knex("Travelers").where("id", id).del();
};

function updateTraveler(id, traveler) {
    return knex("Travelers").where("id", id).update(traveler)
};



module.exports = {
    addTraveler,
    getAllTravelers,
    getTraveler,
    deleteTraveler,
    updateTraveler
};