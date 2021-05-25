const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db_booking = require("../db/booking_db");

const bookingPatch_s = '/booking';
const bookingPatchId_s = '/booking/:id';

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.post(bookingPatch_s, async (req, res) => {
    const results = await db_booking.addBooking(req.body);
    res.status(201).json({ id: results[0] });
});

server.get(bookingPatch_s, async (req, res) => {
    const bookings = await db_booking.getAllBookings();
    res.status(200).json({ bookings });
});

server.get(bookingPatchId_s, async (req, res) => {
    const bookings = await db_booking.getBooking(req.params.id);
    res.status(200).json({ bookings });
});

server.patch(bookingPatchId_s, async (req, res) => {
    const id = await db_booking.updateBooking(req.params.id, req.body);
    res.status(200).json({ id });
});

server.delete(bookingPatchId_s, async (req, res) => {
    await db_booking.deleteBooking(req.params.id);
    res.status(200).json({ success: true });
});


module.exports = server;