const express = require("express");
const { getBestMove, saveGame } = require("../controllers/chessController");

const router = express.Router();
router.post("/move", getBestMove);
router.post("/save", saveGame);

module.exports = router;
