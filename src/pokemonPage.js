import React from 'react';
import './App.css'
import { Link } from 'react-router-dom'

 async function loggedIn() {
    let SignedInRes = await fetch('http://localhost:5000/signedIn')
    let SignedIn = await SignedInRes.json()

    if(SignedIn === false){
        window.location.href = "/404"
    }
    console.log(SignedIn)

    let userResponse = await fetch('http://localhost:5000/users')
    let responseData = await userResponse.json()
    let displayName = document.getElementById('displayUsername')
    displayName.innerHTML = ''
    displayName.innerHTML = `welcome, ${responseData[responseData.length - 1].username}`
}


function pokemonPage() {
 return(
    <div className='second-bg'>
        {window.onload = loggedIn}
        <nav className='main-Nav'> 
            <ul>
              <li>
              <a href='/pokeStats'>poke Stats</a>  
              </li>
              <li>
                  <a href='/counters'>Counters</a>
              </li>
          </ul>
      </nav>
      <div className='hello-message'>
     <h1 id='displayUsername'></h1>
     
     

      </div>
    
    </div>
 )
}





export default pokemonPage;
