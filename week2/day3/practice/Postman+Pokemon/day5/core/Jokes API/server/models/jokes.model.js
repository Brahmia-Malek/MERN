// import mongoose to build model
const mongoose = require("mongoose");

// the model - the rules the everyone need to follow

const JokeSchema = new mongoose.Schema({

    _id:{
        type:Number

    },

   
    setup: {
        type: String
    },
    punchline:{
        type: String
    }

}, {timestamps: true})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;