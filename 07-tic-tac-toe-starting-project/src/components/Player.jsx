import { useState } from "react";

export default function Player({initialPlayerName, playerSymbol, isActive, onChangeName}){

    // Initially Player name is not getting edited so false
    const [ isEditing, setIsEditing ] = useState(false);

    // Initial PlayerName passed as props
    const [ playerName , setPlayerName ] = useState(initialPlayerName);

    // Function to update whether editing or saving
    function handleEditClick(){
        setIsEditing((editing)=> !editing);

        if(isEditing){
            onChangeName(playerSymbol, playerName);
        }
        
    }

    // Function to set the playerName from input
    function handleNameChange(event){
        setPlayerName(event.target.value);
    }

    let playerNameField = <span className="player-name">{playerName}</span>;

    if(isEditing){
        playerNameField = <input type="text" required value={playerName} onChange={handleNameChange} placeholder={initialPlayerName} />
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {/* If edit is true then here input box will be shown else the playerName */}
                {playerNameField}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}