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
var cards = ['a', 'a', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', 'j', 'j', 'q', 'q', 'k', 'k'];

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
  if (this.getAttribute('data-card') === 'a') {
    this.innerHTML = "<img src='images/a.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '1') {
    this.innerHTML = "<img src='images/1.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '2') {
    this.innerHTML = "<img src='images/2.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '3') {
    this.innerHTML = "<img src='images/3.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '4') {
    this.innerHTML = "<img src='images/4.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '5') {
    this.innerHTML = "<img src='images/5.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '6') {
    this.innerHTML = "<img src='images/6.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '7') {
    this.innerHTML = "<img src='images/7.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '8') {
    this.innerHTML = "<img src='images/8.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '9') {
    this.innerHTML = "<img src='images/9.png'>"; 
  } 
  else if (this.getAttribute('data-card') === '10') {
    this.innerHTML = "<img src='images/10.png'>"; 
  } 
  else if (this.getAttribute('data-card') === 'j') {
    this.innerHTML = "<img src='images/j.png'>"; 
  } 
  else if (this.getAttribute('data-card') === 'q') {
    this.innerHTML = "<img src='images/q.png'>"; 
  } 
  else if (this.getAttribute('data-card') === 'k') {
    this.innerHTML = "<img src='images/k.png'>"; 
  } 
  else {
    this.innerHTML = "<img src='images/empty.png'>"; 
  }

  //this checks the number of cards in play
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);

  }
}

function isMatch(cards) {
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
    

    document.getElementById('message').innerHTML = "Sorry.  Try Again!";

    // Card reset function after wrong guess
    document.querySelector('[data-card="' + cardsInPlay[0] + '"]').innerHTML = "";
    document.querySelector('[data-card="' + cardsInPlay[1] + '"]').innerHTML = "";

    // }
  };
  cardsInPlay = [];
}





createBoard();
