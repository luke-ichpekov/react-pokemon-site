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
    populateScreen()  
}


function pokeStats() {
    
 return(
    <div className='stats-bg'>
        <nav className='main-Nav'> 
          <ul>
              <li>
              <a href='/pokemonPage'>Home</a>
              </li>
              <li>
                  <a href='/counters'>Counters</a>
              </li>
          </ul>
      </nav>
      {window.onload = loggedIn}
      <div id='pop-up-container'>
          <div id='pop-up'>
          <AiFillCloseCircle  id='icon-pop-up' />
          <h1 id='pokemonName'></h1>
          <div id='image-container-card'><img  id='pop-up-img'  /></div>
          <div id='type-card'></div>
        
          <div id='progress-barHolder'>
              <div id='progress-bar1'>
                  <h2 id='stat'>HP</h2>
                  <div id='bar1'>
                      <div id='progress'></div>
                  </div>
                  <h2 id='value'>43</h2>
              </div>


              <div id='progress-bar2'>
                  <h2 id='stat2'>Attack</h2>
                  <div id='bar2'>
                      <div id='progress2'></div>
                  </div>
                  <h2 id='value2'>43</h2>
              </div>


              <div id='progress-bar3'>
                  <h2 id='stat3'>Defense</h2>
                  <div id='bar3'>
                      <div id='progress3'></div>
                  </div>
                  <h2 id='value3'>43</h2>             
              </div>


              <div id='progress-bar4'>
                  <h2 id='stat4'>Sp. Atk</h2>
                  <div id='bar4'>
                      <div id='progress4'></div>
                  </div>
                  <h2 id='value4'>43</h2>             
              </div>



              <div id='progress-bar5'>
                  <h2 id='stat5'>Sp. Def</h2>
                  <div id='bar5'>
                      <div id='progress5'></div>
                  </div>
                  <h2 id='value5'>43</h2>             
              </div>

              <div id='progress-bar6'>
                  <h2 id='stat6'>Speed</h2>
                  <div id='bar6'>
                      <div id='progress6'></div>
                  </div>
                  <h2 id='value6'>43</h2>             
              </div>
          


          </div>
          </div>
          </div>
      
      <div id='main-box'>      
    
    </div>
</div>
    
 )
}


async function populateScreen() {

    let pokeContainer = document.getElementById('main-box')
    let popUp = document.getElementById('pop-up')
    let NameOnCard = document.getElementById('pokemonName')
    let xButton = document.getElementById('icon-pop-up')
    let cardType = document.getElementById('type-card')
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=807'
    let response = await fetch(url)
    let data = await response.json()
    let pokeNames = []
    let pokeURLS = []

    
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
        
        pokemonCard.addEventListener('click', async () => {           
            pokeContainer.style.filter = 'blur(8px)'
            pokeContainer.style.opacity = '40%'
            popUp.style.backgroundColor = pokemonCard.style.backgroundColor
            NameOnCard.innerText = pokeNames[i].toUpperCase()
            document.getElementById('pop-up-img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
            popUp.style.display = 'block'  
            cardType.innerHTML = 'type: ' + type
            
            let maxHp = 255 
            let maxAttack = 165
            let maxDefense = 230
            let maxSpAtk = 154
            let maxSpDef = 230
            let maxSpeed = 160

            let url = `https://pokeapi.co/api/v2/pokemon/${i+1}/`
            let jumbledStats = await fetch(url)
            let pokeStats = await jumbledStats.json()
            
            let hpValue = document.getElementById('value')
            let attackValue = document.getElementById('value2')
            let defenseValue = document.getElementById('value3')
            let spAtkValue = document.getElementById('value4')
            let spDefValue = document.getElementById('value5')
            let speedValue = document.getElementById('value6')


            let hpProgressBar = document.getElementById('progress')
            let attackProgressBar = document.getElementById('progress2')
            let defenseProgressBar = document.getElementById('progress3')
            let spAtkProgressBar = document.getElementById('progress4')
            let spDefProgressBar = document.getElementById('progress5')
            let speedProgressBar = document.getElementById('progress6')

            
            hpProgressBar.style.width = '10%'


            for(let i=0; i < pokeStats.stats.length; i++){
                if(pokeStats.stats[i].stat.name == 'hp'){
                    hpValue.innerHTML = pokeStats.stats[i].base_stat 
                    let hpWidth = (hpValue.innerHTML / maxHp) * 100
                    hpProgressBar.style.width = `${hpWidth}%`
                    
                }

                if(pokeStats.stats[i].stat.name == 'attack'){
                    attackValue.innerHTML = pokeStats.stats[i].base_stat 
                    let attackWidth = (attackValue.innerHTML / maxAttack) * 100
                    attackProgressBar.style.width = `${attackWidth}%`
                }

                if(pokeStats.stats[i].stat.name == 'defense'){
                    defenseValue.innerHTML = pokeStats.stats[i].base_stat 
                    let defenseWidth = (defenseValue.innerHTML / maxDefense) * 100
                    defenseProgressBar.style.width = `${defenseWidth}%`
                }

                if(pokeStats.stats[i].stat.name == 'special-attack'){
                    spAtkValue.innerHTML = pokeStats.stats[i].base_stat 
                    let spAtkWidth = (spAtkValue.innerHTML / maxSpAtk) * 100
                    spAtkProgressBar.style.width = `${spAtkWidth}%`
                }

                if(pokeStats.stats[i].stat.name == 'special-defense'){
                    spDefValue.innerHTML = pokeStats.stats[i].base_stat 
                    let spDefWidth = (spDefValue.innerHTML / maxSpDef) * 100
                    spDefProgressBar.style.width = `${spDefWidth}%`
                }

                if(pokeStats.stats[i].stat.name == 'speed'){
                    speedValue.innerHTML = pokeStats.stats[i].base_stat 
                    let speedWidth = (speedValue.innerHTML / maxSpeed) * 100
                    speedProgressBar.style.width = `${speedWidth}%`
                }


            }



            xButton.addEventListener('click', () => {
                popUp.style.display = 'none' 
                pokeContainer.style.opacity = '100%'
                pokeContainer.style.filter = 'blur(0px)'
            })  
        })
        
    }
  
    

   

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


export default pokeStats;


