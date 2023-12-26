// Variables
const restartButton = document.getElementById('#restart');
const moves = document.getElementById('#move');
const timer = document.getElementById('#time');
const card = document.querySelectorAll('.cards');


//Event listeners
card.forEach(card => card.addEventListener('click', flipCard));



//Functions

function startGame () {
    cardsArray.sort ();
}

function flipCard() {
this.classList.toggle('flipped')
}

function correctPair() {
       
}

function wrongPair() {

}

function restartGame() {

}

function timeCounter() {

      }
    