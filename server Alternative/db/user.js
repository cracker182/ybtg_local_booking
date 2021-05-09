const knex = require("./knex");

function addUser(user) {
    return knex("Users").insert(user);
};

function getAllUsers() {
    return knex("Users").select("*");
};

function deleteUser(id) {
    return knex("Users").where("id", id).del();
};

function updateUser(id, user) {
    return knex("Users").where("id", id).update(user)
};

module.exports = {
    addUser,
    getAllUsers,
    deleteUser,
    updateUser
};