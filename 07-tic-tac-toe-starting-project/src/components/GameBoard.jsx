import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }){

    return (
        <ol id="game-board">
            {/* Every row has rowIndex in the arrray  using it as key for map*/}
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                       {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => (onSelectSquare(rowIndex, colIndex))} disabled={playerSymbol != null}>
                                {playerSymbol}
                            </button>
                        </li>
                       ))} 
                    </ol>
                </li>
            ))}
        </ol>
    );
}