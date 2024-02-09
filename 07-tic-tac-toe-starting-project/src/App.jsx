import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";

function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  // To determine the currActive Player symbol
  // const [ activePlayer, setActivePlayer ] = useState('X');

  const [ gameTurns, setGameTurns ] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);


  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer(( currActive ) => currActive === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {

      const currentPlayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer },...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <Player initialPlayerName={"Player-1"} playerSymbol={"X"} isActive={activePlayer === 'X'}/>
          <Player initialPlayerName={"Player-2"} playerSymbol={"O"} isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
