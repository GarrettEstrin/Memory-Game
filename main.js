var score = 0;

//This is to keep the score at or above 0
var currentScore = 0;

// Keeps score positive or zero
if (score < 0) score = 0;

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
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '1') {
    this.innerHTML = "<img src='images/1.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '2') {
    this.innerHTML = "<img src='images/2.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '3') {
    this.innerHTML = "<img src='images/3.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '4') {
    this.innerHTML = "<img src='images/4.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '5') {
    this.innerHTML = "<img src='images/5.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '6') {
    this.innerHTML = "<img src='images/6.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '7') {
    this.innerHTML = "<img src='images/7.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '8') {
    this.innerHTML = "<img src='images/8.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '9') {
    this.innerHTML = "<img src='images/9.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === '10') {
    this.innerHTML = "<img src='images/10.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === 'j') {
    this.innerHTML = "<img src='images/j.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === 'q') {
    this.innerHTML = "<img src='images/q.png'>";
    this.setAttribute("id", "highlight");
  }
  else if (this.getAttribute('data-card') === 'k') {
    this.innerHTML = "<img src='images/k.png'>";
    this.setAttribute("id", "highlight");
  }
  else {
    this.innerHTML = "<img src='images/empty.png'>";
  }

  //checks the number of cards in play
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);

  }
}

  function isMatch(cards) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      score = score + 100;
      // Keeps score positive or zero
      if (score < 0) score = 0;
      document.getElementById("score").innerHTML = score;

      document.getElementById('message').innerHTML = "You got a match!  Do it again!";
      cardsInPlay = [];
    } else {
      score = score -100;
      // Keeps score positive or zero
      if (score < 0) score = 0;
      document.getElementById("score").innerHTML = score;
      // // Popup alert
      // // alert("Sorry.  Try again!");
      // if (confirm("Are you sure you wish to continue?")){
      //   //executed when OK clicked
      // }
      // else{
      //   //executed when CANCEL clicked
      // }


      // document.getElementById('message').innerHTML = "<id='resetbutton' button type='resetButton' onclick='resetCards()'>Sorry.  Click here to try Again!</button>";
      document.getElementById('message').innerHTML = "Sorry.  Try again!";

    };

  }

var resetCards = function() {

      // deletes HTML to show picture
      document.querySelector('[data-card="' + cardsInPlay[0] + '"]').innerHTML = "";
      document.querySelector('[data-card="' + cardsInPlay[1] + '"]').innerHTML = "";

      //removes highlight id from div

      document.querySelector('[data-card="' + cardsInPlay[0] + '"]').setAttribute("id", "removehighlight");
      document.querySelector('[data-card="' + cardsInPlay[1] + '"]').setAttribute("id", "removehighlight");

      cardsInPlay = [];
      console.log('Cards were reset');
      }



createBoard();
