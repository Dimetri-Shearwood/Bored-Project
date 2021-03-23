require('./connection');
let mongoose = require("mongoose");
const Bored = require("./Bored");
let websiteData = require("./data.json");

Bored.deleteMany({})
.then(()=> Bored.create(websiteData))
.then(mongoose.disconnect)
.then(()=> console.log("Done!"))
.catch(()=> console.log("Error", error))
