const searchPlayers = () =>{
    const input = document.getElementById('input-value')
    const inputvalue = (input.value);
    // console.log(inputvalue)
    const error = document.getElementById('error')
    // console.log(error)
    
     if (inputvalue == ''){
        error.innerText = 'Enter the number'
    }
    
    else if( inputvalue != 'number'){
        error.innerText = 'please Enter the valid number'
    }

    else if(inputvalue <= 0){
        error.innerText = 'Enter the Positive number'
    }

}