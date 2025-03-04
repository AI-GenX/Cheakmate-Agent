# Cheakmate-Agent

Cheakmate-Agent is a chess bot application built using a combination of Node.js, Express, React, and Python with Stockfish. It provides a real-time chess game experience with a backend server for managing game data and moves, an AI engine powered by Stockfish, and a React-based frontend for users to interact with the chessboard.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Backend](#backend)
- [Frontend](#frontend)
- [AI Engine](#ai-engine)
- [Database](#database)
- [Environment Variables](#environment-variables)
- [License](#license)

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: React, chessboardjsx
- **AI Engine**: Python, Stockfish (Chess engine)
- **Database**: MongoDB
- **Others**: Socket.IO, dotenv, axios

## Project Structure

```
cheakmate-agent/
│── backend/ (Node.js + Express)
│   ├── server.js
│   ├── routes/
│   │   ├── chess.js
│   ├── controllers/
│   │   ├── chessController.js
│   ├── models/
│   │   ├── Game.js
│   ├── config/
│   │   ├── db.js
│── frontend/ (React + chessboardjsx)
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── ChessBoard.js
│   │   │   ├── Navbar.js
│   │   ├── styles/
│   │   │   ├── App.css
│── ai/ (Python + Stockfish)
│   ├── bot.py
│   ├── train.py
│   ├── stockfish/ (Stockfish engine)
│── database/ (MongoDB Data)
│   ├── games.json
│── .env
│── README.md
│── package.json
```

### Backend

The backend of this project is built using Node.js and Express. It handles:

- Serving API requests related to the chess game.
- Communicating with the AI engine for move suggestions.
- Storing game data in a MongoDB database.

#### Key files in the `backend/` directory:

- **server.js**: Entry point for the backend server.
- **routes/chess.js**: Defines the routes for handling game operations.
- **controllers/chessController.js**: Contains the logic for handling game moves, starting a new game, and interacting with the AI.
- **models/Game.js**: Defines the schema for the game data to be stored in MongoDB.
- **config/db.js**: Handles the connection to the MongoDB database.

### Frontend

The frontend of the project is built with React and chessboardjsx. It provides a user interface for:

- Viewing the chessboard.
- Interacting with the game.
- Displaying the game state and moves.

#### Key files in the `frontend/` directory:

- **App.js**: The main React component that initializes the game.
- **components/ChessBoard.js**: Displays the chessboard and handles user interactions.
- **components/Navbar.js**: Contains the navigation bar of the app.
- **styles/App.css**: Contains the styling for the app.

### AI Engine

The AI engine is powered by Python and uses Stockfish, a powerful chess engine, for generating chess moves.

#### Key files in the `ai/` directory:

- **bot.py**: Script to interact with Stockfish and generate the best move for the AI.
- **train.py**: Used for training the AI model (if applicable).
- **stockfish/**: Contains the Stockfish chess engine.

### Database

The project uses MongoDB to store game data. The data is saved in a JSON file (`games.json`) in the `database/` directory for simplicity.

### Environment Variables

The project uses environment variables for sensitive information like database connection strings and API keys. Create a `.env` file in the root directory and add the necessary environment variables:

```
MONGO_URI=<your-mongo-uri>
SECRET_KEY=<your-secret-key>
STOCKFISH_PATH=<path-to-stockfish>
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cheakmate-agent.git
   cd cheakmate-agent
   ```

2. Install dependencies for the backend:
   ```
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:
   ```
   cd frontend
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root of the project and filling in the necessary values.

5. Start the backend server:
   ```
   cd backend
   npm start
   ```

6. Start the frontend React app:
   ```
   cd frontend
   npm start
   ```

7. Start the AI engine:
   ```
   cd ai
   python bot.py
   ```

## License

This project is licensed under the MIT License.
