// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 2;
let secondCard = 19;
let hasBlackjack = false;
let isAlive = true;
let message;

let sum = firstCard + secondCard

if (sum <= 20) {
    message = "Do you want to draw a new card?";

} else if (sum === 21) {
    message = "Rejoice boy, for your wish has come true.";
    hasBlackjack = true;

} else {
    message = "You are out of the game.";
    isAlive = false;

}

console.log(message);
