let mongoose = require('mongoose')

let boredSchema = new mongoose.Schema({
  name: String,
  url: String
})

let bored = mongoose.model('Bored', boredSchema)

module.exports = bored
