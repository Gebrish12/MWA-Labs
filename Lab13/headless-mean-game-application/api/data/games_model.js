const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: String,
  address: String,
});
const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  year: Number,
  designers: [String],
  minPlayers: {
    type: Number,
    min: 1,
    max: 10,
  },
  maxPlayers: {
    type: Number,
    min: 1,
    max: 10,
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
  publisher: publisherSchema,
});

mongoose.model("Games", gameSchema, "games");
