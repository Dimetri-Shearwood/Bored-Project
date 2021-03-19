require("./database");
require('./connection')
let mongoose = require("mongoose");
const Bored = require("./Bored");
let websiteData = require("./data.json");

// let boredData = data.map(item => {
//     const bored = {}
//     bored.activity = item.activity
//     bored.type = item.type
//     bored.participants = item.type
//     bored.price = item.price
//     bored.link = item.link
//     bored.key = item.key
//     bored.accessebility = item.accessebility
// })

Bored.deleteMany({})
.then(()=> Bored.create(websiteData))
.then(mongoose.disconnect)
.then(()=> console.log("Done!"))
.catch(()=> console.log("Error", error))
