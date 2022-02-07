let numeroCartas;
let vetorCartas = [];


function virar(carta_container){
 let frente = carta_container.querySelector(".frente");
 frente.classList.toggle("flip");
 const verso = carta_container.querySelector(".verso");
 verso.classList.toggle("flip");
}


vetorCartas = ['img/borboleta-192x192.png', 'img/flor-192x192.png', 'img/leão-192x192.png',
'img/lesma.png', 'img/penguim-.png','img/porco-192x192.png','img/unicornio-192x192.png',
];
vetorCartas.sort(comparador);



function informarNumerosCartas(){
   numeroCartas = prompt("Com quantas cartas quer jogar?");
    
    while((numeroCartas < 4) || (numeroCartas>14) ||(numeroCartas%2)!== 0){
        alert("Número inválido. Informe outro número");
        numeroCartas = prompt("Com quantas cartas quer jogar?");

    }

}
informarNumerosCartas();

let cartas = [];

for(let i=0; i<numeroCartas/2; i++){
    cartas[2*i] = vetorCartas[i];
    cartas[(2*i)+1] = vetorCartas[i];
    cartas.sort(comparador);
}


let cartinha = document.querySelector('.container');
for (let i=0; i<numeroCartas; i++){
    cartinha.innerHTML+= ` 
    <div class="carta_container" data-identifier="card" onclick="virar(this)">
    <div class="carta verso" data-identifier="front-face">
    <img src="${cartas[i]}" alt="">
    </div>
    <div class="carta frente" data-identifier="back-face">
    <img src="front 1.png" alt=""> 
    </div>
    </div>`  
}


function comparador() { 
	return Math.random() - 0.5; 
}

/*


function checkCards(card){
    if (cardType(card) === cardType(flippedCard)){
      matchedCards.push(card.classList.add('blocked', 'matched'));
      matchedCards.push(flippedCard.classList.add('blocked', 'matched'));
     
      flippedCard = null;
    }
    else {
      blockAllCards(true);
  
      setTimeout(() => {
        card.classList.remove('visible');
        flippedCard.classList.remove('visible');
        flippedCard = null;
        blockAllCards(false);
      }, 1000);
    }
  }
  function blockAllCards(bool){ 
    if (bool){
      cards.forEach((card) => {
        card.classList.add('blocked');
      })
    }
    else {
      cards.forEach((card) => {
        if (!(card.classList.contains('matched'))){
          card.classList.remove('blocked');
        }
      })
    }
  }



let primeiraCarta, segundaCarta;
function flipCard(){
    this.classList.add('flip');
    if(!cartaVirada){     //primeira carta
        primeiraCarta = this;
        return false;
    } else{               //segunda carta
        segundaCarta= this;
    }
    //verificar se minhas cartas match
 match();
}

function match(){
    let isMatch = primeiraCarta.dataset.card === segundaCarta.dataset.card;

    !isMatch ? removeFlip():true;
}

function removeFlip(){
    setTimeout(() => { primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');}, 1000);
   
}

/*/

