import React from 'react';
import './App.css'
import {AiFillCloseCircle} from 'react-icons/ai'

 async function loggedIn() {
    let SignedInRes = await fetch('https://completed-poke-server.herokuapp.com/signedIn') //modified
    let SignedIn = await SignedInRes.json()

    if(SignedIn === false){
        window.location.href = "/404"
    }
    console.log(SignedIn)
}


function counters() {
 return(
    <div className='counters-bg'>
        {window.onload = loggedIn}
        <nav className='main-Nav'> 
            <ul>
            <li>
                  <a href='/pokemonPage'>Home</a>
              </li>
              <li>
              <a href='/pokeStats'>poke Stats</a>  
              </li>
          </ul>
      </nav>
      <div id='counter-container'>
          <div id='counterCard-palceholder' onClick={selectPokemon}>
              <h1 id='text-on-placeholder'>Pick a pokemon to counter</h1>
              <h1 id='question-mark'>?</h1>
          </div>
      </div>

      <div id='counter-box-container'>
          <h1 id='counter-title-word'>COUNTER PICKS</h1>
          <div id='counter-Cards-Container'>
          </div>
      </div>
      
      <div id='title-select-container'>
      <h1 id='select-card-title'>Select a Pokemon </h1>
      <AiFillCloseCircle  id='select-pokemon-close' />
      </div>
      <div id='main-box'>      
    
    </div>
    
    </div>
 )
}


async function selectPokemon() {
    let pokeContainer = document.getElementById('main-box')
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=807'
    let response = await fetch(url)
    let data = await response.json()
    let pokeNames = []
    let pokeURLS = []
    let counterContainer = document.getElementById('counter-container')
    let titleSelectContainer = document.getElementById('title-select-container')
    let returnButton = document.getElementById('select-pokemon-close')
    let replaceableCard = document.getElementById('counterCard-palceholder')
    let counterCardsAndText = document.getElementById('counter-box-container') //big box
    counterCardsAndText.style.display ='none' 
    let allTypes = ['grass', 'poison', 'fire', 'flying', 'water', 'bug', 'normal', 'ground', 'electric', 'fairy', 'fighting', 'psychic', 'steel', 'ice', 'ghost', 'rock', 'dragon', 'dark']
    let ArrayofGrass = []
    let ArrayofPoison = []
    let ArrayofFire = []
    let ArrayofFlying = []
    let Arrayofwater = []
    let Arrayofbug = []
    let Arrayofnormal = []
    let Arrayofground = []
    let Arrayofelectric = []
    let Arrayoffairy = []
    let Arrayoffighting = []
    let Arrayofpsychic = []
    let Arrayofsteel = []
    let Arrayofice = []
    let Arrayofghost = []
    let Arrayofrock = []
    let Arrayofdragon = []
    let Arrayofdark = []
    let allCounterCardsContainer = document.getElementById('counter-Cards-Container')
    
    pokeContainer.style.display ='flex'
    titleSelectContainer.style.display ='block'
    counterContainer.style.display = 'none'

    for(let i = 0 ; i< data.results.length; i++){
        pokeNames.push(data.results[i].name)
        pokeURLS.push(data.results[i].url) 
        let pokemonCard = document.createElement('div')
        pokemonCard.classList.add('pokemonCard')
        let type = await getType(pokeURLS[i], pokemonCard)
        let pokemonCardInnerHtml = `${pokeNames[i].toUpperCase()}
        <div class='img-container'>
        <img src= https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png />
        </div>
        <div class='num'> ${i+1} </div>
        <div class='type-card'>Type: ${type}</div> `
        
        pokemonCard.innerHTML = pokemonCardInnerHtml 
        pokeContainer.appendChild(pokemonCard)

       
       
        if(type.split(' ,')[0] == 'grass'){
            ArrayofGrass.push(pokemonCard)
        }

        if(type.split(' ,')[0] == 'poison'){
            ArrayofPoison.push(pokemonCard)
        }

        if(type.split(' ,')[0] == 'fire'){
            ArrayofFire.push(pokemonCard)
        }

        if(type.split(' ,')[0] == 'flying'){
            ArrayofFlying.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'water'){
            Arrayofwater.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'bug'){
            Arrayofbug.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'normal'){
            Arrayofnormal.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'ground'){
            Arrayofground.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'electric'){
            Arrayofelectric.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'fairy'){
            Arrayoffairy.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'fighting'){
            Arrayoffighting.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'psychic'){
            Arrayofpsychic.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'steel'){
            Arrayofsteel.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'ice'){
            Arrayofice.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'ghost'){
            Arrayofghost.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'rock'){
            Arrayofrock.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'dragon'){
            Arrayofdragon.push(pokemonCard)
        }
        if(type.split(' ,')[0] == 'dark'){
            Arrayofdark.push(pokemonCard)
        }

           
          pokemonCard.addEventListener('click', () => {
            
            let randomNumbers = []
            replaceableCard.style.backgroundColor = pokemonCard.style.backgroundColor
            replaceableCard.innerHTML = pokemonCard.innerHTML
            replaceableCard.style.border ='0px'
            pokeContainer.style.display ='none'
            counterContainer.style.display = 'flex'
            titleSelectContainer.style.display ='none'
            counterCardsAndText.style.display ='block'  
            allCounterCardsContainer.innerHTML = ''
        




        if(type.split(' ,')[0] == 'ground') {        
            for(let i = 0; i < ArrayofGrass.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * ArrayofGrass.length)
                    randomNumbers.push(randValue)
                }
                allCounterCardsContainer.appendChild(ArrayofGrass[randomNumbers[0]])
                allCounterCardsContainer.appendChild(ArrayofGrass[randomNumbers[1]])
                allCounterCardsContainer.appendChild(ArrayofGrass[randomNumbers[2]])
               
            break
            }
        }

        if(type.split(' ,')[0] == 'fairy') {        
            for(let i = 0; i < ArrayofPoison.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * ArrayofPoison.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(ArrayofPoison[randomNumbers[0]])
                allCounterCardsContainer.appendChild(ArrayofPoison[randomNumbers[1]])
                allCounterCardsContainer.appendChild(ArrayofPoison[randomNumbers[2]])
               
                break
            }
        }


        if(type.split(' ,')[0] == 'bug') {        
            for(let i = 0; i < ArrayofFire.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * ArrayofFire.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[0]])
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[1]])
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[2]])
               
                    break

            }
        }


        
        if(type.split(' ,')[0] == 'fighting') {        
            for(let i = 0; i < Arrayofpsychic.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofpsychic.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[2]])
                
                break
            }
        }



        if(type.split(' ,')[0] == 'steel') {        
            for(let i = 0; i < Arrayofwater.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofwater.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofwater[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofwater[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofwater[randomNumbers[2]])  
               
                    break

            }
        }



        if(type.split(' ,')[0] == 'grass') {        
            for(let i = 0; i < ArrayofFire.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    console.log(ArrayofFire.length)
                    let randValue = Math.floor(Math.random() * ArrayofFire.length)
                    randomNumbers.push(randValue)
                }  
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[0]])
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[1]])
                allCounterCardsContainer.appendChild(ArrayofFire[randomNumbers[2]])
              
            break
            }
        }


        if(type.split(' ,')[0] == 'ghost') {        
            for(let i = 0; i < Arrayofdark.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofdark.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofdark[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofdark[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofdark[randomNumbers[2]])
                
            break
            }
        }


        if(type.split(' ,')[0] == 'electric') {        
            for(let i = 0; i < Arrayofground.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofground.length)
                    randomNumbers.push(randValue)
                }
                allCounterCardsContainer.appendChild(Arrayofground[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofground[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofground[randomNumbers[2]])
            break

                
            }
        }


        if(type.split(' ,')[0] == 'flying') {        
            for(let i = 0; i < Arrayofelectric.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofelectric.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[2]])
               
                break
               
            }
        }


        if(type.split(' ,')[0] == 'dark') {        
            for(let i = 0; i < Arrayoffairy.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayoffairy.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayoffairy[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayoffairy[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayoffairy[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'normal') {        
            for(let i = 0; i < Arrayoffighting.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayoffighting.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'poison') {        
            for(let i = 0; i < Arrayofpsychic.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofpsychic.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofpsychic[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'rock') {        
            for(let i = 0; i < Arrayofsteel.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofsteel.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofsteel[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofsteel[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofsteel[randomNumbers[2]])
               
            break
            }
        }

         if(type.split(' ,')[0] == 'dragon') {        
            for(let i = 0; i < Arrayofice.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofice.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofice[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofice[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofice[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'psychic') {        
            for(let i = 0; i < Arrayofghost.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofghost.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofghost[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofghost[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofghost[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'fire') {        
            for(let i = 0; i < Arrayofrock.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofrock.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofrock[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofrock[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofrock[randomNumbers[2]])
            }
        }

        if(type.split(' ,')[0] == 'water') {        
            for(let i = 0; i < Arrayofelectric.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayofelectric.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayofelectric[randomNumbers[2]])
            }
        }


        if(type.split(' ,')[0] == 'ice') {        
            for(let i = 0; i < Arrayoffighting.length; i++) {
                for(let z =0; z < 3 ; z ++){
                    let randValue = Math.floor(Math.random() * Arrayoffighting.length)
                    randomNumbers.push(randValue)
                } 
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[0]])
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[1]])
                allCounterCardsContainer.appendChild(Arrayoffighting[randomNumbers[2]])
            }
        }




        
    })

        returnButton.addEventListener('click', () => {
            pokeContainer.style.display ='none'
            counterContainer.style.display = 'flex'
            titleSelectContainer.style.display ='none'
         })
    
   }

   

}

function destructurePage(pokeContainer, titleSelectContainer, counterContainer, counterCardsAndText){
    pokeContainer.style.display ='flex'
    titleSelectContainer.style.display ='block'
    counterContainer.style.display = 'none'
    counterCardsAndText.style.display ='none' 
}

async function getType(specificURL, pokemonCard){
    let response = await fetch(specificURL)
    let data = await response.json()
    let Type 
    let colorGrass = '#78C850'
    let colorPoison = '#A040A0'
    let colorFire = '#F08030'
    let colorFlying = '#A890F0'
    let colorWater = '#6890F0'
    let colorBug = '#A8B820'
    let colorNormal = '#A8A878'
    let colorGround = '#E0C068'
    let colorElectric = '#F8D030'
    let colorFairy = '#EE99AC'
    let colorFighting = '#C03028'
    let colorPsychic ='#F85888'
    let colorSteel = '#B8B8D0'
    let colorIce = '#98D8D8'
    let colorGhost = '#705898'
    let colorRock = '#B8A038'
    let colorDragon = '#7038F8'
    let colorDark = '#705848'
    


    
    if(data.types.length == 2){
        
 
        Type = `${data.types[0].type.name} , ${data.types[1].type.name}`
        if (data.types[0].type.name == 'grass'){
            pokemonCard.style.backgroundColor = colorGrass
        }

        if (data.types[0].type.name == 'poison'){
            pokemonCard.style.backgroundColor = colorPoison
        }

        if (data.types[0].type.name == 'fire'){
            pokemonCard.style.backgroundColor = colorFire
        }

        if (data.types[0].type.name == 'flying'){
            pokemonCard.style.backgroundColor = colorFlying
        }

        if (data.types[0].type.name == 'water'){
            pokemonCard.style.backgroundColor = colorWater
        }

        if (data.types[0].type.name == 'bug'){
            pokemonCard.style.backgroundColor = colorBug
        }

        if (data.types[0].type.name == 'normal'){
            pokemonCard.style.backgroundColor = colorNormal
        }

        if (data.types[0].type.name == 'ground'){
            pokemonCard.style.backgroundColor = colorGround
        }

        if (data.types[0].type.name == 'electric'){
            pokemonCard.style.backgroundColor = colorElectric
        }

        if (data.types[0].type.name == 'fairy'){
            pokemonCard.style.backgroundColor = colorFairy
        }

        if (data.types[0].type.name == 'fighting'){
            pokemonCard.style.backgroundColor = colorFighting
        }

        if (data.types[0].type.name == 'psychic'){
            pokemonCard.style.backgroundColor = colorPsychic
        }

        if (data.types[0].type.name == 'steel'){
            pokemonCard.style.backgroundColor = colorSteel
        }

        if (data.types[0].type.name == 'ice'){
            pokemonCard.style.backgroundColor = colorIce
        }

        if (data.types[0].type.name == 'ghost'){
            pokemonCard.style.backgroundColor = colorGhost
        }

        if (data.types[0].type.name == 'rock'){
            pokemonCard.style.backgroundColor = colorRock
        }

        if (data.types[0].type.name == 'dragon'){
            pokemonCard.style.backgroundColor = colorDragon
        }

        if (data.types[0].type.name == 'dark'){
            pokemonCard.style.backgroundColor = colorDark
        }
        return Type
    }


    else{
        Type = data.types[0].type.name
        if (data.types[0].type.name == 'grass'){
            pokemonCard.style.backgroundColor = colorGrass
        }

        if (data.types[0].type.name == 'poison'){
            pokemonCard.style.backgroundColor = colorPoison
        }

        if (data.types[0].type.name == 'fire'){
            pokemonCard.style.backgroundColor = colorFire
        }

        if (data.types[0].type.name == 'flying'){
            pokemonCard.style.backgroundColor = colorFlying
        }

        if (data.types[0].type.name == 'water'){
            pokemonCard.style.backgroundColor = colorWater
        }

        if (data.types[0].type.name == 'bug'){
            pokemonCard.style.backgroundColor = colorBug
        }

        if (data.types[0].type.name == 'normal'){
            pokemonCard.style.backgroundColor = colorNormal
        }

        if (data.types[0].type.name == 'ground'){
            pokemonCard.style.backgroundColor = colorGround
        }

        if (data.types[0].type.name == 'electric'){
            pokemonCard.style.backgroundColor = colorElectric
        }

        if (data.types[0].type.name == 'fairy'){
            pokemonCard.style.backgroundColor = colorFairy
        }

        if (data.types[0].type.name == 'fighting'){
            pokemonCard.style.backgroundColor = colorFighting
        }

        if (data.types[0].type.name == 'psychic'){
            pokemonCard.style.backgroundColor = colorPsychic
        }

        if (data.types[0].type.name == 'steel'){
            pokemonCard.style.backgroundColor = colorSteel
        }

        if (data.types[0].type.name == 'ice'){
            pokemonCard.style.backgroundColor = colorIce
        }

        if (data.types[0].type.name == 'ghost'){
            pokemonCard.style.backgroundColor = colorGhost
        }

        if (data.types[0].type.name == 'rock'){
            pokemonCard.style.backgroundColor = colorRock
        }

        if (data.types[0].type.name == 'dragon'){
            pokemonCard.style.backgroundColor = colorDragon
        }

        if (data.types[0].type.name == 'dark'){
            pokemonCard.style.backgroundColor = colorDark
        }

        return Type
    }

}




export default counters