const knex = require("./knex");

function addUser(user) {
    return knex("Users").insert(user);
};

function getAllUsers() {
    return knex("Users").select("*");
};

function getUser(id) {
    return knex("Users").where("id", id);
};

function deleteUser(id) {
    return knex("Users").where("id", id).del();
};

function updateUser(id, user) {
    return knex("Users").where("id", id).update(user)
};

function validateLogin(name, password) {
    return knex("Users").where("name", name).andWhere("password", password);
};

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    validateLogin
};