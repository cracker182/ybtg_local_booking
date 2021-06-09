const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const db_traveler= require("../../db/traveler_db");

const travelerPatch_s = '/traveler';
const travelerPatchId_s = '/traveler/:id';

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());

server.get(travelerPatch_s, async (req, res) => {
    const travelers = await db_traveler.getAllTravelers();
    res.status(200).json(travelers);
});

server.get(travelerPatchId_s, async (req, res) => {
    const traveler = await db_traveler.getTraveler(req.params.id);

    if (traveler === undefined) {
        return res.status(404).json({'status': 'not found'});
    } 

    res.status(200).json(traveler);
 
});


module.exports = server;