/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './Card.css'

function ShowHide() {

    const [Show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!Show);
    };

  return (
    <div className='hide'>
        <button onClick={handleClick}>{Show ? 'Ocultar' : 'Mostrar'} Texto </button>
      {Show && <h2>Alt + F4</h2>}
    </div>
  )
}

export default ShowHide