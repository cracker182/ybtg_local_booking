'use strict';

// Modulimporte

const FS = require('fs');
const PATH = require('path');
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const MORGAN = require('morgan');

let app_o = EXPRESS();

module.exports = app_o;