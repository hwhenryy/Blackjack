// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let gameStart = false;
let firstCard = 2;
let secondCard = 19;
let cards = firstCard + ", " + secondCard

let hasBlackjack = false;
let isAlive = true;
let message = ""
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let newEl = document.getElementById("new-el");


function startGame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?";

    } else if (sum === 21) {
        message = "Rejoice boy, for your wish has come true.";
        hasBlackjack = true;

    } else {
        message = "You are out of the game.";
        isAlive = false;

    }

    messageEl.textContent = message;
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;
    gameStart = true;

}

function newCard() {

    if (gameStart == true) {
        newCard = 5;
        sum = sum += newCard;
        startGame();

    } else {

    }
}
