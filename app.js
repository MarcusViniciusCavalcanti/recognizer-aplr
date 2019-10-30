const express = require('express');
const logger = require('morgan');
const ipFilter = require('express-ipfilter').IpFilter;
const bodyParser = require('body-parser');
const fs = require('fs');
const leds = require('./core/led.js');

const config = JSON.parse(fs.readFileSync('./config.json').toString());

const commands = require('./routes/command');
const app = express();

leds.testLeds().then(result => console.log('finalizando, teste de leds...'));

console.log('runngin program, ips allow: ',config.ipsAllow);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(ipFilter(config.ipsAllow, { mode: 'allow' }));
app.use('/command', commands);

module.exports = app;

process.on('SIGINT', () => {
	leds.reset();
	process.exit();
});
