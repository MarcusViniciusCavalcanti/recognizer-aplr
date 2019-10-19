const express = require('express');
const router = express.Router();
const Gpio = require('onoff').Gpio;


const relay = new Gpio(23, 'out');

/* GET users listing. */
router.get('/open', function(req, res, next) {
    if (relay.readSync() === 0) {
      setInterval(() => {
          relay.writeSync(Gpio.HIGH);
          relay.writeSync(Gpio.LOW);
      }, 500);
    }
    res.send({status: 1, message: 'abrindo cancela'});
});

router.get('/check-connection', function(req, res, next) {
    res.send('conexão ok!');
});

module.exports = router;
