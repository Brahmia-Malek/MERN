//the controller does CRUD 
// import the model here

const Joke = require("../models/jokes.model")
console.log(Joke);

// READ ALL
module.exports.readAll = (req, res) => {
    Joke.find()
    .then((allJokes) =>{
        res.json(allJokes)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })

    
}

//READ ONE
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ Joke: oneSingleHero })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}




        // CREATE
module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then((newlyCreatedJoke)=>{
        res.json({Hero: newlyCreatedJoke})
    })
    .catch((err)=>{
        res.json({ message: "Something went wrong", error: err });
    });
};





// UPDATE 
module.exports.update = (req, res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body,
    {new: true, runValidators: true})
    .then((updatedJoke)=>{
        res.json({Joke: updatedHero})
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}


// DELETE
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
