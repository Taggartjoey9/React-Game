import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Player({ initialName, symbol, isActive }) {

    const [ playerName, setPlayerName ] = useState(initialName);

    const [ isEditing, setIsEditing] = useState(false);

    function handleUpdateEdit() {
        setIsEditing((editing) => !editing);

    };

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

        return (
            <li className={isActive ? 'active' : undefined }>
              <span className='player' onChange={handleChange}>
                {isEditing === false ? <span className='player-name'>{playerName}</span> : <input type='text' required value={playerName}  /> }
                <span className='player-symbol'>{symbol}</span>
              </span>
              <button onClick={handleUpdateEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
        )
}