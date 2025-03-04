import chess
import chess.engine
import sys

STOCKFISH_PATH = "./stockfish/stockfish"  # Change this to your Stockfish path

def get_best_move(fen):
    board = chess.Board(fen)
    with chess.engine.SimpleEngine.popen_uci(STOCKFISH_PATH) as engine:
        result = engine.play(board, chess.engine.Limit(time=0.1))
        return result.move

if __name__ == "__main__":
    fen = sys.argv[1]
    print(get_best_move(fen))
