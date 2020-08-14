import React from 'react'
import { Link } from 'react-router-dom'


function UI() {
    return(
        
        <div className='button'>
        <body className="containerSign"></body>
            <Link to='/signup'>
            <button className='signup'>
                Sign Up
            </button>
            </Link>
            <Link to='/login'>
            <button className='login'>
                log in
            </button>
            </Link>
            </div>
)
}


export default UI