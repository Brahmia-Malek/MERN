const JokeController = require("../controllers/jokes.controller");
console.log("JokeController is =>", JokeController)

module.exports = (app) =>{
    app.get("/api/jokes", JokeController.readAll);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.post("/api/jokes", JokeController.create);
    app.put("/api/jokes/:id", JokeController.update);
    app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke);

}