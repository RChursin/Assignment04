/** The Rock, Paper, Scissors Game */

/** Lets bake dow what we need to do to make game work:
 * 1. Prompt the user to enter their choice of rock, paper, or scissors.
 * 2. Generate a random number between 0 and 1.
 * 3. Assign rock to the computer if the random number is less than 0.34.
 * 4. Assign paper to the computer if the random number is less than 0.67.
 * 5. Assign scissors to the computer if the random number is greater than 0.67.
 * 6. Display the computer's choice in an alert box.
 * 7. Determine the winner of the game based on the choices made by the user and the computer.
 * 8. Display the result in an alert box.
 * 9. Call the function to play the game.
 * 10. Test the game by playing it multiple times.
 */


/** This function plays the game of Rock, Paper, Scissors with the user. 
The user is prompted to enter their choice of rock, paper, or scissors. 
The computer randomly selects one of the three options. 
The function then determines the winner based on the choices made by the user and the computer. 
The result is displayed in an alert box. */
function playRockPaperScissors() {
    let userChoice = prompt("Do you choose rock, paper or scissors?"); // Prompt the user to enter their choice
    let computerChoice = Math.random(); // Generate a random number between 0 and 1
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    alert("Computer: " + computerChoice);  // Display the computer's choice in an alert box

    function determineWinner(userChoice, computerChoice) {
        // Determine the winner of the game
        if(userChoice === computerChoice) {
            return "The result is a tie!";
        }

        // If the user chooses rock
        if(userChoice === "rock") {
            if(computerChoice === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        }

        // If the user chooses paper
        if(userChoice === "paper") {
            if(computerChoice === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }
        }

        // If the user chooses scissors
        if(userChoice === "scissors") {
            if(computerChoice === "rock") {
                return "rock wins";
            } else {
                return "scissors wins";
            }
        }
    }

    let result = determineWinner(userChoice, computerChoice); // Determine the winner of the game
    alert(result); // Display the result in an alert box
}