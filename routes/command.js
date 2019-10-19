const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/open', function(req, res, next) {
    res.send({status: 1, message: 'abrindo cancela'});
});

router.get('/check-connection', function(req, res, next) {
    res.send('conexão ok!');
});

module.exports = router;
