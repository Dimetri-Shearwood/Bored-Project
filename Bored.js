let mongoose = require('mongoose')

const boredSchema = new mongoose.Schema({
    "activity": String,
    "type": String,
    "participants": Number,
    "price": Number,
    "link": String,
    "key": Number,
    "accessibility": Number
})

module.exports = mongoose.model('Bored', boredSchema)