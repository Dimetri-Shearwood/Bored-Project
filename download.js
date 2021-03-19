let fetch = require('node-fetch')
let fs = require('fs').promises

fetch('https://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => fs.writeFile("./data.json", JSON.stringify(data)))
    .catch(error=> console.log(error))
    

