const mongoose = require("mongoose");
const Games = mongoose.model("Games");

const getAll = function (req, res) {
  console.log("get all request has recieved");
  var offset = 0;
  var counter = 6;

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }
  if (req.query && req.query.counter) {
    var x = parseInt(req.query.counter);
    if (x > 9) {
      res.status(404).send("the count should not exceded morethan 9");
      return;
    } else {
      counter = x;
    }
  }
  if (isNaN(offset) || isNaN(counter)) {
    console.log("the query offset and counter should be numbers");
    res
      .status(400)
      .json({ message: "the query offset and counter should be numbers" });
    return;
  }
  Games.find()
    .skip(offset)
    .limit(counter)
    .exec(function (err, games) {
      if (err) {
        res.status(500).send(err);
        return;
      } else {
        res.status(200).json(games);
      }
    });
};

const getOne = function (req, res) {
  console.log("get by id request recieved");
  const gameID = req.params.gameID;
  if (!mongoose.Types.ObjectId.isValid(gameID)) {
    console.log("Invalid id");
    res
      .status(400)
      .json({ message: "the id you provide does not satisfy id of mongodb" });
    return;
  }
  Games.findById(gameID).exec(function (err, game) {
    if (err) {
      console.log("error finding game");
      res.status(500).json(err);
      return;
    } else {
      if (!game) {
        console.log("can not find game", game);
        res
          .status(404)
          .json({ message: "game with the given id is not fount" });
        return;
      } else {
        console.log();
        res.status(200).json(game);
      }
    }
  });
};

const addone = function (req, res) {
  console.log("adding Game request has recieved");
  const newGame = {
    title: req.body.title,
    price: req.body.price,
    rate: req.body.rate,
    year: req.body.year,
    minPlayers: req.body.minPlayers,
    maxPlayers: req.body.maxPlayers,
  };
  Games.create(newGame, function (err, newGame) {
    if (err) {
      res.status(500).json("adding the game unsuccessful");
      return;
    } else {
      res.status(200).json(newGame);
    }
  });
};

const deleteOne = function (req, res) {
  console.log("deleting one game request has recieved");
  const gameID = req.params.gameID;
  if (!mongoose.Types.ObjectId.isValid(gameID)) {
    console.log("the given id doesn't satisfiy the id of the database");
    res.status(400).json({
      message: "the given id doesn't satisfiy the id of the database",
    });
    return;
  }

  Games.findByIdAndRemove(gameID).exec(function (err) {
    if (err) {
      res.status(500).json("the game with the given id is unavailable");
      return;
    } else {
      res.status(200).json("deleted successfully");
    }
  });
};

const updateOne = function (req, res) {
  console.log("updating the game request has recieved");
  const gameID = req.params.gameID;
  console.log(gameID);
  if (!mongoose.Types.ObjectId.isValid(gameID)) {
    console.log("the given id doesn't satisfiy the id of the database");
    res.status(400).json({
      message: "the given id doesn't satisfiy the id of the database",
    });
    return;
  }

  Games.findById(gameID).exec(function (err, game) {
    if (err) {
      res.status(500).json("the game with the given id is unavailable");
      return;
    } else {
      if (!game) {
        res.status(404).json("invalid game");
        return;
      } else {
        (game.title = req.body.title), (game.price = req.body.price);
        (game.rate = req.body.rate),
          (game.year = req.body.year),
          game.save(function (err, updateGame) {
            if (err) {
              res.status(500).json(err);
            } else {
              res.status(200).json(updateGame);
            }
          });
      }
    }
  });
};
module.exports = {
  getAll: getAll,
  getOne: getOne,
  addone: addone,
  deleteOne: deleteOne,
  updateOne: updateOne,
};
