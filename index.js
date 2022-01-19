// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards

let gameStart = false;
let firstCard = 2;
let secondCard = 19;
let Cards = [firstCard, secondCard]
let newCard;

let hasBlackjack = false;
let isAlive = true;
let message = ""
let sum = firstCard + secondCard

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let newEl = document.getElementById("new-el");

function startGame() {
    renderGame();
}

function renderGame() {

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

    for (var i = 0; i < Cards.length; i++) {
    cardsEl.textContent += Cards[i];
    }


    sumEl.textContent = "Sum: " + sum;
    gameStart = true;

}

function newCard() {
  
        newCard = 5;
        Cards.push(newCard)
        sum += newCard;
        renderGame();
    

}

