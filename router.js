let express = require('express')

let boredRouter = require('./Bored/router')

let router = new express.Router()
router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.use('/bored', boredRouter)

module.exports = router