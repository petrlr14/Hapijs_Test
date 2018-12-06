const mongoose = require('mongoose');
const {
    mongodb
} = require('./keys');

mongoose.connect(mongodb.URI, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(db => console.log("Success"))
    .catch(err => console.log(err));