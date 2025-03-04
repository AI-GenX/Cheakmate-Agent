const { exec } = require("child_process");
const Game = require("../models/Game");

exports.getBestMove = (req, res) => {
    const { fen } = req.body;
    exec(`python3 ../ai/bot.py "${fen}"`, (error, stdout) => {
        if (error) return res.status(500).send("Error computing best move");
        res.json({ move: stdout.trim() });
    });
};

exports.saveGame = async (req, res) => {
    try {
        const { fen, moves, result } = req.body;
        const game = new Game({ fen, moves, result });
        await game.save();
        res.json({ message: "Game saved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Could not save game" });
    }
};
