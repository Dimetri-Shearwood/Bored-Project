let Bored = require('./model')
require('../connection')



let controller = {
    create(request, response){
        let bored = request.body
        Bored
            .create(bored)
            .then(responseData=> response.json(responseData))
    },
    readById(request, response){
        let id = request.params.id
        console.log("Hit Me")
        console.log(request.params)

        bored
            .find({})
            .then(boreds=> response.json(boreds))
    },
    readAll(request, response){
        Bored
            .find({})
            .then(boreds=> response.json(boreds))
    },
    update(request, response) {
        let bored = requestbody
        let id = request.params.id
        Bored  
            .findByIdAndUpdate(id, bored, {new: true})
            .then(bored=> response.json(bored))
    },
    destroy(request, response) {
        let id = request.params.id
        Bored
            .findByIdAndDelete(id)
            .then(()=> response.json({ok: true}))
    }
}

module.exports = controller