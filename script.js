// Variables
const restartButton = document.getElementById('restart');
const moves = document.getElementById('move');
const timer = document.getElementById('time');
const cards = document.querySelectorAll('cards');


//Event listeners
restartButton.addEventListener('click', restartGame);
cards.forEach(card => card.addEventListener('click', flipCard));
timer.addEventListener();
moves.addEventListener('click');


//Functions

function startGame () {
    cardsArray.sort ();
}

function flipCard() {
console.log('I was clicked!');
console.log(this);
}

function correctPair() {
       
}

function wrongPair() {

}

function restartGame() {

}

function timeCounter() {

      }
    