const express = require('express');
const logger = require('morgan');
const ipFilter = require('express-ipfilter').IpFilter;
const bodyParser = require('body-parser');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./config.json').toString());

const commands = require('./routes/command');

const app = express();

const ips = config.ipsAllow;

console.log(ips)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(ipFilter(config.ipsAllow, { mode: 'allow' }));
app.use('/command', commands);

module.exports = app;
