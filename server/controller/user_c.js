const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db_user = require("../db/user_db");

const userPatch_s = '/user';
const userPatchId_s = '/user/:id';

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.post(userPatch_s, async (req, res) => {
    const results = await db_user.addUser(req.body);
    res.status(201).json({ id: results[0] });
});

server.get(userPatch_s, async (req, res) => {
    const users = await db_user.getAllUsers();
    res.status(200).json({ users });
});

server.get(userPatchId_s, async (req, res) => {
    const users = await db_user.getUser(req.params.id);
    res.status(200).json({ users });
});

server.patch(userPatchId_s, async (req, res) => {
    const id = await db_user.updateUser(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete(userPatchId_s, async (req, res) => {
    await db_user.deleteUser(req.params.id);
    res.status(200).json({ success: true });
});

server.post('/login', async (req, res) => {
    const users = await db_user.validateLogin('Miau', 'katz');
    if (users.length > 0) {
        res.status(200).json({ users });
    } else {
        res.status(400).json({ success: false });
    };
});

module.exports = server;