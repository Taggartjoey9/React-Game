import { useState } from 'react';

export default function Player({ name, symbol }) {

    const [ isEditing, setIsEditing] = useState(false);

    function UpdateEdit() {
        setIsEditing(true);
        console.log(isEditing)
        
    };

        return (
            <li>
              <span className='player'>
                <span className='player-name'>{name}</span>
                <span className='player-symbol'>{symbol}</span>
              </span>
              <button onClick={UpdateEdit}>Edit</button>
            </li>
        )
}