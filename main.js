'use strict';

let cards = document.querySelectorAll('.card');
// console.log(cards);
let compareArray = []; //array to compare cards
let divArray = [];
let matchPair = 0; //number of matched pairs
let memory_board =document.querySelector('#memory_board');

function resetBoard(){
  for (var i = memory_board.children.length; i >= 0; i--) {
    memory_board.appendChild(memory_board.children[Math.random() * i | 0]); //randomiserar divarna
  }
  cards.forEach(function(card){
    card.querySelector('img').classList.remove('images_clicked');
    card.classList.remove('clicked');
    console.log(card);

  });
  compareArray = []; //empties the array after picking two cards
  divArray = [];
}

for (var i = memory_board.children.length; i >= 0; i--) {
  memory_board.appendChild(memory_board.children[Math.random() * i | 0]); //ramdomizing the divs
}

let comparefunc = (dataset) => {
  // console.log(dataset);
  console.log(divArray);
  if(compareArray.length == 2 ) {
    console.log('nu har du tryckt på två kort');
    memory_board.classList.add('pointerStop');
    setTimeout(function(){
      memory_board.classList.remove('pointerStop');
    }, 1000)

    if (compareArray[0]==compareArray[1]) {
      console.log('match');
      matchPair++; //adds one for each matching pair
      console.log(matchPair);
      compareArray = []; //empties the array after picking two cards
      divArray = [];
      if (matchPair == 8) { //when the player found all matching pairs
        // console.log('You won');
      }
    } else {
      // console.log('no match');
      setTimeout(function() {
        divArray[0].classList.remove('clicked'); //removes the class clicked on the picked divs
        divArray[1].classList.remove('clicked');
        divArray[0].querySelector('img').classList.remove('images_clicked');//removes the class images_clicked on the picked divs
        divArray[1].querySelector('img').classList.remove('images_clicked');
        compareArray = []; //empties the array after picking two cards
        divArray = [];
      }, 1000)
    }
  }
}

cards.forEach((cardEach)=> {
  // console.log(cardEach);
  cardEach.addEventListener('click', (event) => {
    let currentDiv = event.target;
    divArray.push(currentDiv);
    console.log(currentDiv);
    currentDiv.classList.toggle('clicked');
    let currentImg = currentDiv.querySelector('img');
    currentImg.classList.add('images_clicked');
    // console.log(event.target.dataset.card);
    let currentCard = event.target.dataset.card;
    console.log(currentCard);
    let compare = compareArray.push(currentCard);
    // console.log(compareArray);
    return comparefunc(currentCard);
  })
});

document.querySelector(".playBtn").addEventListener('click', function(){
  return resetBoard(); //when player clicks the Reset button the game board shuffles and reset
});
