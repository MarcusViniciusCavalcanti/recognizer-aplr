const express = require('express');
const router = express.Router();
const Gpio = require('onoff').Gpio;


/* GET users listing. */
router.get('/open', function(req, res, next) {
    const relay = new Gpio(21, 'out');
    if (relay.readSync() === Gpio.LOW) {
        console.log('ligando . . .');
        relay.writeSync(Gpio.HIGH);

        setTimeout(() => {
            console.log('desligando. . .');
            relay.writeSync(Gpio.LOW);
            relay.unexport();
        }, 500)
    }
    res.send({status: 1, message: 'abrindo cancela'});
});

router.get('/check-connection', function(req, res, next) {
    res.send('conexão ok!');
});


module.exports = router;
