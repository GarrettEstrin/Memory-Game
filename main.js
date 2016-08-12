var score = 0;

document.getElementById("score").innerHTML = score;

// game cards
var cards = ['queen', 'queen', 'king', 'king'];

// cars in play
var cardsInPlay = [];

//Messages





// find the HTML board - create board variable
var board = document.getElementById('game-board');
//create cards
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='king.jpg'>"; 
  } else {
    this.innerHTML = "<img src='queen.jpg'>"; 
  }
  //this checks the number of cards in play
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear cards - NOT WORKING - NEED FIX
    // cardsInPlay = [];
  }
}

function isMatch(cards) {
  // alert
  if (cards[0] === cards[1]) {
    score = score + 1;
    document.getElementById("score").innerHTML = score;
    // function matchMessage() {
    //   var messageElement = document.createElement('div');
    //   messageElement.classname = "message";
    //   messageElement.addEventListener('click', addToScore);
    
    document.getElementById('message').innerHTML = "You got a match!  Do it again!";
  } else {
    score = score -1;
    document.getElementById("score").innerHTML = score;
    document.getElementById('message').innerHTML = "Sorry, try again.";


    
  }
  cardsInPlay = [];
}



createBoard();
