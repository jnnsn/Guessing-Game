// The app will randomly generate a number from 1-100, and the player will try to guess that number in a limited number of attempts. The app will give feedback depending on how close the user's guess is and will also keep track of previous guesses.
// Here is how the game operates:

// A winning number between 1-100 will be randomly generated.
// TODO - use Math.random()

// The player inputs their guess in a text input field.

// The player clicks a button to submit their guess.
    //TODO - addEventListener to button(s) 

        // IF- the player guesses the winning number, they win! Otherwise, they are allowed to try again.

        // ELSE IF - The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.

        // ELSE - After five unsuccessful guesses, the game is over and the player loses.



let randomNumber = (Math.floor(Math.random() * 100) + 1);
let guessButton = document.getElementById("guessButton");
let div3Results = document.getElementById("div3Results");

let tries = 5


console.log(guessButton)
guessButton.addEventListener("click", function(){
    let numberInput = document.getElementById("numberInput").value;  
    console.log(randomNumber)
    let tryAttempts = document.getElementById("tryAttempts");

    if (tries > 0){
        tryAttempts.innerHTML = `You entered: ${numberInput}`
        if (numberInput == randomNumber){
            div3Results.innerHTML = "You got it right!";
        }
        else if (numberInput < randomNumber){
            div3Results.innerHTML = "You guessed too low, guess higher!" + (tries--) + " tries left.";
        }
        else {
            div3Results.innerHTML = "You guessed too high, guess lower!" + (tries--) + " tries left.";
        }
    }   
    else {
        div3Results.innerHTML = "All tries are used! The number was "+ randomNumber;
    }
    
});

// let try1 = document.getElementById("try1");
// let try2 = document.getElementById("try2");
// let try3 = document.getElementById("try3");
// let try4 = document.getElementById("try4");
// let try5 = document.getElementById("try5");

// try1.document.getElementById("numberInput").addEventListener("click", function(){
//     if (tries < 2){
//         try1.innerHTML = `${numberInput}`
//     }
//     else if (tries < 3 && tries > 1){
//         try2.innerHTML = `${numberInput}`
//     }
//     return number;
// }); 

