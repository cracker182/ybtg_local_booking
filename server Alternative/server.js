const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db_user = require("./db/user");
const db_event = require("./db/event");
const db_booking = require("./db/booking");

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

// Zum abfragen, ob der Server läuft
server.get('/', (req, res) => {
    res.status(200).json({ success: true});
});

// REST API für Benutzer
server.post("/addUser", async (req, res) => {
    const results = await db_user.addUser(req.body);
    res.status(201).json({ id: results[0] });
});

server.get("/users", async (req, res) => {
    const users = await db_user.getAllUsers();
    res.status(200).json({ users });
});

server.patch("/users/:id", async (req, res) => {
    const id = await db_user.updateUser(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete("/users/:id", async (req, res) => {
    await db_user.deleteUser(req.params.id);
    res.status(200).json({ success: true });
});

// REST API für Veranstaltungen
server.post("/addEvent", async (req, res) => {
    const results = await db_event.addEvent(req.body);
    res.status(201).json({ id: results[0] });
});

server.get("/events", async (req, res) => {
    const events = await db_event.getAllEvents();
    res.status(200).json({ events });
});

server.patch("/events/:id", async (req, res) => {
    const id = await db_event.updateEvent(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete("/events/:id", async (req, res) => {
    await db_event.deleteEvent(req.params.id);
    res.status(200).json({ success: true });
});

// REST API für Veranstaltungen
server.post("/addBooking", async (req, res) => {
    const results = await db_booking.addBooking(req.body);
    res.status(201).json({ id: results[0] });
});

server.get("/bookings", async (req, res) => {
    const bookings = await db_booking.getAllBookings();
    res.status(200).json({ bookings });
});

server.patch("/bookings/:id", async (req, res) => {
    const id = await db_booking.updateBooking(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete("/bookings/:id", async (req, res) => {
    await db_booking.deleteBooking(req.params.id);
    res.status(200).json({ success: true });
});

server.listen(3000, () => console.log('API opened on port 3000'));
