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

    if (tries > 0){
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


