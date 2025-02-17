
//this function will retun a dictionnary with parameters tentatives(attempts ) min and max and with values that depends from the level chosen
function parameters(level) {
    const parametersMap= new Map([
        ['facile', { tentatives: 10, min: 1, max: 50 }],
        ['intermediaire', { tentatives: 7, min: 1, max: 100 }],
        ['difficile', { tentatives: 5, min: 1, max: 200 }]
    ]);
    const parametres = parametersMap.get(level.toLowerCase());
    return parametres;
}

//this is the main function
function play (min,max,attempts){
    let running=true;//indicates the game is running you are now playing 
    while (running){
    
        const level=window.prompt(" choose the level u want : \n facile -> 10 attempts to find number between 1 and 50 \n intermediaire -> 7 attempts to find number between 1 and 100 \n difficile ->5 attempts to find number between 1 and 200");
        const settings=parameters(level);//settings here is dictionnary
        const { tentatives, min, max } = settings;
        let randomNum = Math.floor(Math.random()*(max-min+1))+min;
        let attempts=tentatives;
        let found =false ;
        while(found === false && attempts != 0 ){
            window.alert(`you have ${attempts} attempts left `);
            guess=window.prompt("make a guess");
            
            
            if (isNaN(guess)){
                window.alert("make a valid guess")
            }
            else{
                if( guess > max || guess < min){
                    window.alert(`please make a guess between ${max} and ${min}`)
                }
                else{
                    attempts--;
                    if(guess < randomNum){
                        window.alert("too low try again")
                    }
                    else if(guess>randomNum){
                        window.alert("too high try again ")
                    }
                    else {
                        window.alert("YEEES found it");
                        found=true;

                    }
                }
            }
        }
        if (attempts==0){
            window.alert(`oooow noo Game over !!! no attempts left the mystery number is ${randomNum} `)
        }
        running=window.confirm(" do u want to replay ")//if u want to replay without rechargin the page
    }
    window.alert("the game ended")
}

 play();