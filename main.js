var score = 0;

//This is to keep the score at or above 0
var currentScore = 0;


function posScore(score) {
if (score < 0) {
    currentScore = 0;
} else {
    currentScore = score;
}
};

document.getElementById("score").innerHTML = currentScore;

// game cards
var cards = ['queen', 'queen', 'king', 'king'];

// cars in play
var cardsInPlay = [];

//Messages - moved into isMatch function

//shuffle function

function shuffle(array) {
  var m = cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  // return array;
}

// Run this function to shuffle cards before the board is built
shuffle(cards);






// find the HTML board - create board variable
var board = document.getElementById('game-board');
//create cards
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    // Begin code to highlight selection on click
    // cardElement.addEventListener('click', );
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

  }
}

function isMatch(cards) {
  // alert
  if (cards[0] === cards[1]) {
    score = score + 100;
    document.getElementById("score").innerHTML = score;
    // function matchMessage() {
    //   var messageElement = document.createElement('div');
    //   messageElement.classname = "message";
    //   messageElement.addEventListener('click', addToScore);
    
    document.getElementById('message').innerHTML = "You got a match!  Do it again!";
  } else {
    score = score -100;
    document.getElementById("score").innerHTML = score;
    document.getElementById('message').innerHTML = "<button type='button' id='resetbutton' onclick='resetCards()''>Sorry, Try Again</button>";
    // document.getElementByClassName("card").innerHTML = "";


    
  }
  cardsInPlay = [];
}
//Code to resetcards after wrong selection - not working
// function resetCards() {
//   document.getElementByClassName('card').innerHTML = "";
// }
// //code to highlight selected card - not complete
// function highlightCard() {
//   this.setAttribute
// }




createBoard();
