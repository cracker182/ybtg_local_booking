const knex = require("./knex");

function addEvent(event) {
    return knex("Events").insert(event);
};

function getAllEvents() {
    return knex("Events").select("*");
};

function getEvent(id) {
    return knex("Events").where("id", id);
};

function deleteEvent(id) {
    return knex("Events").where("id", id).del();
};

function updateEvent(id, event) {
    return knex("Events").where("id", id).update(event)
};

module.exports = {
    addEvent,
    getAllEvents,
    getEvent,
    deleteEvent,
    updateEvent
};