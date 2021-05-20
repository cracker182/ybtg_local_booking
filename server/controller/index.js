'use strict';

// Modulimporte

const FS = require('fs');
const PATH = require('path');
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const MORGAN = require('morgan');

const userController_o = require('./user_c');

let app_o = EXPRESS();

let baseDir_a = PATH.dirname(require.main.filename).split(PATH.sep);
baseDir_a.pop();
let baseDir_s = baseDir_a.join(PATH.sep);

app_o.use(EXPRESS.static(PATH.join(baseDir_s, 'client')));



app_o.get('/', function (req, res) {
    //let path_s = PATH.join(baseDir_s, 'client', 'html', 'test.html');
    //res.sendFile(path_s)
});

app_o.use('/', userController_o);


module.exports = app_o;