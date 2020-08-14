import React from 'react';
import Header from './Header'
import UI from './UI'
import signupPage from './signupPage';
import './App.css'
import loginPage from './loginPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import pokemonPage from './pokemonPage';
import pokeStats from './pokeStats';
import notLoggedIn from './notLoggedIn'
import counters from './counters'


function App() {
 return(

  <Router>
   
    <div>     
      <Switch>
      <Route  exact path='/signup' component={signupPage} />
      <Route  exact path='/' component={Home} />
      <Route  exact path='/login' component={loginPage} />
      <Route  exact path='/pokemonPage' component={pokemonPage} />
      <Route  exact path='/pokeStats' component={pokeStats} />
      <Route  exact path='/counters' component={counters} />
      <Route  exact path='/404' component={notLoggedIn} />


    </Switch>
  </div>
 </Router>
 
 )
}



function Home(){
  return(
    <div>
    <Header />
    <UI />
    </div>
  )
}

export default App;
