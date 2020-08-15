import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function loginPage() {
 return(

  <div className='vertical-menu'>

<Link to='/'>
<AiFillCloseCircle className='icon-signup' />
</Link>
    <h1 className='title-signup-menu' >Login</h1>
    <form className='signup-form'>
      <h3 id='loginError'>login Error</h3>
      <input type='text' placeholder='Username' id='loginUsername'/>
      <input type='password' placeholder='password' id='loginPassword' />
      <button type='button' onClick={loginClick}>Login</button>
      <a href='/signup'>Sign up</a>
    </form>
  </div>
 )
}

async function loginClick() {
    let userName = document.getElementById("loginUsername").value  
    let userPassword = document.getElementById("loginPassword").value    
    let potentialLoginError = document.getElementById('loginError')


    let loginData = {'loginUserName': userName, 'loginPassword' : userPassword}
    let options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
  },
  body :  JSON.stringify(loginData)
    }
   let loginResponse = await fetch('https://completed-poke-server.herokuapp.com/users/login', options)    //modified
   let finalLoginStatus = await loginResponse.json()
   

   if(finalLoginStatus.status !== 'The user was successfully logged in'){
    potentialLoginError.innerText = finalLoginStatus.status  
    potentialLoginError.style.display = 'block'
  }


  if(finalLoginStatus.status === 'The user was successfully logged in'){

    let options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'},
    }
    
  fetch('https://completed-poke-server.herokuapp.com/signedInPost', options)   //modified
    window.location.href = "/pokemonPage"
}


  let userResponse = await fetch('https://completed-poke-server.herokuapp.com/users') //modified
  let responseData = await userResponse.json()
  console.log(responseData)
}


export default loginPage;
