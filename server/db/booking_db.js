const knex = require("./knex");

function addBooking(booking) {
    return knex("Bookings").insert(booking);
};

function getAllBookings() {
    return knex("Bookings").select("*");
};

function getBooking(id) {
    return knex("Bookings").where("id", id);
};

function deleteBooking(id) {
    return knex("Bookings").where("id", id).del();
};

function updateBooking(id, booking) {
    return knex("Bookings").where("id", id).update(booking)
};

module.exports = {
    addBooking,
    getAllBookings,
    getBooking,
    deleteBooking,
    updateBooking
};