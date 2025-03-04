import React, { useState } from "react";
import ChessBoard from "chessboardjsx";
import axios from "axios";

const ChessGame = () => {
    const [position, setPosition] = useState("start");

    const onDrop = async ({ sourceSquare, targetSquare }) => {
        const move = `${sourceSquare}${targetSquare}`;
        const newPosition = { ...position, [sourceSquare]: null, [targetSquare]: position[sourceSquare] };
        setPosition(newPosition);

        try {
            const response = await axios.post("http://localhost:5000/api/chess/move", { fen: newPosition });
            setPosition(response.data.move);
        } catch (error) {
            console.error("Error fetching AI move", error);
        }
    };

    return (
        <div>
            <h2>Chess AI</h2>
            <ChessBoard position={position} onDrop={onDrop} />
        </div>
    );
};

export default ChessGame;
