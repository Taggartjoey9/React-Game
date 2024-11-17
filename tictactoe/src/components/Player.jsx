import { useState } from 'react';

export default function Player({ name, symbol }) {

    const [ isEditing, setIsEditing] = useState(false);

    function handleUpdateEdit() {
        setIsEditing(true);

    };

        return (
            <li>
              <span className='player'>
                {isEditing === false ? <span className='player-name'>{name}</span> : <input type='text' required value={name} />}
                <span className='player-symbol'>{symbol}</span>
              </span>
              <button onClick={handleUpdateEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
        )
}