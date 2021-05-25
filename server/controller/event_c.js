const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db_event = require("../db/event_db");

const eventPatch_s = '/event';
const eventPatchId_s = '/event/:id';

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.post(eventPatch_s, async (req, res) => {
    const results = await db_event.addEvent(req.body);
    res.status(201).json({ id: results[0] });
});

server.get(eventPatch_s, async (req, res) => {
    const events = await db_event.getAllEvents();
    res.status(200).json({ events });
});

server.get(eventPatchId_s, async (req, res) => {
    const events = await db_event.getEvent(req.params.id);
    res.status(200).json({ events });
});

server.patch(eventPatchId_s, async (req, res) => {
    const id = await db_event.updateEvent(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete(eventPatchId_s, async (req, res) => {
    await db_event.deleteEvent(req.params.id);
    res.status(200).json({ success: true });
});


module.exports = server;