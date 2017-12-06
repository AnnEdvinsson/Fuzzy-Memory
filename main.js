'use strict';

let cards = document.querySelectorAll('.card');
// console.log(cards);
let compareArray = []; //array där vi jämför kort
let divArray = [];
let matchPair = 0; //antalet matchade par

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
  compareArray = []; //tömmer arrayen efter valt två kort
  divArray = [];
}


for (var i = memory_board.children.length; i >= 0; i--) {
  memory_board.appendChild(memory_board.children[Math.random() * i | 0]); //randomiserar divarna
}

let comparefunc = (dataset) => {
  // console.log(dataset);
  console.log(divArray);
  if(compareArray.length == 2 ) {
    console.log('nu har du tryckt på två kort');

    if (compareArray[0]==compareArray[1]) {
      console.log('match');
      matchPair++; //lägger till 1 för varje matchande par i matchPair-variabeln.
      console.log(matchPair);
      compareArray = []; //tömmer arrayen efter valt två kort
      divArray = [];
      if (matchPair == 8) { //när vi hittat alla matchande par
        console.log('You won');
      }

    } else {
      console.log('no match');

      setTimeout(function() {
        divArray[0].classList.remove('clicked'); //tar bort klassen clicked på klickad div.
        divArray[1].classList.remove('clicked');
        divArray[0].querySelector('img').classList.remove('images_clicked');
        divArray[1].querySelector('img').classList.remove('images_clicked');
        compareArray = []; //tömmer arrayen efter valt två kort
        divArray = [];
      }, 1000)
    }
    // compareArray = []; //tömmer arrayen efter valt två kort
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
    let compare = compareArray.push(currentCard); //för att kunna jämföra korten. först dit jag vill skicka och inom parates det jag vill skicka
    // console.log(compareArray);

    return comparefunc(currentCard);
  })
});

  document.querySelector(".playBtn").addEventListener('click', function(){
    return resetBoard();
  });
