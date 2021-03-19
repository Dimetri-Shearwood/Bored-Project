let mongoose = require('mongoose')



let mongooseConnectionConfig = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }

let connectionString = 'mongodb://localhost/Bored';

mongoose.connect(connectionString, mongooseConnectionConfig);
