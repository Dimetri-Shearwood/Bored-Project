let express = require('express')

let boredRouter = require('./Bored/router')

let router = new express.Router()

router.use('/bored', boredRouter)

module.exports = router