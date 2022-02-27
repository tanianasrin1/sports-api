const playerContainer = document.getElementById('player-container')
const searchPlayers = () =>{
    const spinner = document.getElementById('spinner').style.display = 'block'
    const input = document.getElementById('input-value')
    const inputvalue = (input.value);
    // console.log(inputvalue)
    const error = document.getElementById('error')
    // console.log(error)
    
     if (inputvalue == ''){
        error.innerText = 'Enter the value'
        input.value = ''
        playerContainer.innerHTML = ''
    }
    
   

    else if(!isNaN(inputvalue)){
        error.innerText = 'Enter the Positive number'
        input.value = ''
        playerContainer.innerHTML = ''
        
    }

     
      else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputvalue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
        input.value = ''
        playerContainer.innerHTML = ''
        error.innerHTML = ''
      
    
      }


}

const displayPlayers = (players) => {
    if(players){
        document.getElementById('spinner').style.display = 'none'
    }
    
    else{
        document.getElementById('spinner').style.display = 'block'
    }

 for(const player of players){
    //  console.log(player.idPlayer)
    // const spinner = document.getElementById('spinner').style.display = 'block'
    const playerContainer = document.getElementById('player-container')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card border p-5">
    <div class="pro-pic">
 
    <img class="w-50" src="${player.strThumb}" alt="">
    </div>
    <h2>Name: ${player.strPlayer}</h2>
    <h5>Country: ${player.strNationality}</h5>
    <p></p>
    <div class="all-button"> 
        <button class="btn btn-danger">Delete</button>
        <button onclick = "details(${player.idPlayer})" class="btn btn-success">Details</button>
 
    </div>
 
 </div>
    `
    playerContainer.appendChild(div)
 }

}

const details = (playerId) =>{
    // console.log(playerId)
    const url= `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayerDetails(data.players[0]))
}

const displayPlayerDetails = details =>{
    // console.log(details.strGender)
    if(details.strGender == 'Male'){
        document.getElementById('male-img').style.display = 'block'
        document.getElementById('female-img').style.display = 'none'
    }

    else{
        document.getElementById('male-img').style.display = 'none'
        document.getElementById('female-img').style.display = 'block'
    }
    const playerDetails = document.getElementById('details')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="pro-pic">
 
    <img class="w-25" src="${details.strThumb}" alt="">
    </div>
    <h2>Name: ${details.strPlayer}</h2>
    <h5>Country: ${details.strNationality}</h5>
    `
    playerDetails.appendChild(div)
}