import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }){

    // Here the gameboard is set as initialGameBoard because intially the borad should be with null values
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquareButton(rowIndex, colIndex){

    //     // Setting the previous selected value in the array
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {/* Every row has rowIndex in the arrray  using it as key for map*/}
            {gameBoard.map((row, rowIndex) => (
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