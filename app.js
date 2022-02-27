const searchPlayers = () =>{
    const input = document.getElementById('input-value')
    const inputvalue = (input.value);
    // console.log(inputvalue)
    const error = document.getElementById('error')

    // console.log(error)
    
     if (inputvalue == ''){
        error.innerText = 'Enter the number'
        input.value = ''
    }
    
    //  if( inputvalue != 'number'){
    //     error.innerText = 'please Enter the valid number'
    //     input.value = ''
    // }

     if(inputvalue <= 0){
        error.innerText = 'Enter the Positive number'
        input.value = ''
    }

     
      else{
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputvalue}`
        fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
        input.value = ''
    
      }

}

const displayPlayers = (players) => {
 for(const player of players){
    //  console.log(player.strThumb)
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
        <button class="btn btn-success">Details</button>
 
    </div>
 
 </div>
    `
    playerContainer.appendChild(div)
 }

}