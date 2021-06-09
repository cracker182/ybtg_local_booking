'use strict';

// Modulimporte

const FS = require('fs');
const PATH = require('path');
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const MORGAN = require('morgan');

const db_user = require("../db/user_db");

const userController_o = require('./user_c');
const eventController_o = require('./event_c');
const bookingController_o = require('./booking_c');

const adminTravelerController = require('./admin/TravelerController');

let app_o = EXPRESS();

let baseDir_a = PATH.dirname(require.main.filename).split(PATH.sep);
baseDir_a.pop();
let baseDir_s = baseDir_a.join(PATH.sep);

app_o.use(EXPRESS.static(PATH.join(baseDir_s, 'client')));
app_o.set('view engine', 'pug');

app_o.use('/', userController_o);
app_o.use('/', eventController_o);
app_o.use('/', bookingController_o);

//app_o.use('/', adminEventController);
app_o.use('/', adminTravelerController);
//app_o.use('/', adminEvaluationController);
//app_o.use('/', adminOfferController);


app_o.get('/', async function (req, res) {
    const users = await db_user.getAllUsers();
    console.log(users);
    res.render('main', { userList: users });
});

module.exports = app_o;