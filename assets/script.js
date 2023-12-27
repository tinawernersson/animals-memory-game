// Variables
const restartButton = document.getElementById('#restart');
const moves = document.getElementById('#move');
const timer = document.getElementById('#time');
const card = document.querySelectorAll('.cards');

let hasFlippedCard = false;
let firstCard, secondCard;


//Event listeners
card.forEach(card => card.addEventListener('click', flipCard));



//Functions

function startGame () {
    cardsArray.sort ();
}

function flipCard() {
this.classList.add('flip');
if(!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
}
}

function correctPair() {
       
}

function wrongPair() {

}

function restartGame() {

}

function timeCounter() {

      }
    