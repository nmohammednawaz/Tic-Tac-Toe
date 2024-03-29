
export default function Log({ turns }){
    return(
        <ol id="log">
            {turns.map(turn => 
            <li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player === 'X' ? "Player-1" : "Player-2"} selected {turn.player} at row {turn.square.row} & column {turn.square.col}
            </li>)}
        </ol>
    );
}