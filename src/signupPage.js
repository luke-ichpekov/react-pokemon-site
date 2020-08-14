import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function signupPage() {

  return(

  <div className='vertical-menu'>

<Link to='/'>
<AiFillCloseCircle className='icon-signup' />
</Link>
    <h1 className='title-signup-menu'>Signup</h1>
    <form className='signup-form'>
      <h3 id='signupError'>error message</h3>
      <input type='text' placeholder='Username' id='signupUsername' />
      <input type='password' placeholder='password' id='signupPassword'/>
      <button type='button' onClick={signupClick}> Create Account </button>
      <a href='/login'>Log In</a>
    </form>
  </div>
 )
}

async function signupClick() {
  let userName = document.getElementById("signupUsername").value  
  let userPassword = document.getElementById("signupPassword").value    
  let potentialError = document.getElementById('signupError')
 
  console.log(userName)
  console.log(userPassword)
  let signupData = {'userName': userName, 'userPassword' : userPassword}
  let options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
},
body :  JSON.stringify(signupData)
  }
  let responseMessage =  await fetch('http://localhost:5000/users', options)   
  let finalStatus = await responseMessage.json()
  
  if(finalStatus.status !== 'Successfully signed up'){
    potentialError.innerText = finalStatus.status  
    potentialError.style.display = 'block'
  }
  if(finalStatus.status === 'Successfully signed up'){
  window.location.href = "/login"
  }

  let userResponse = await fetch('http://localhost:5000/users')
  let responseData = await userResponse.json()
  console.log(responseData)
}



export default signupPage;
