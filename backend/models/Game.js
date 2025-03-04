const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    fen: String,
    moves: [String],
    result: String,
});

module.exports = mongoose.model("Game", GameSchema);
