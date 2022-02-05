let numeroCartas;
 let vetorCartas = [];


function virar(carta_container){
 let frente = carta_container.querySelector(".frente");
 frente.classList.toggle("flip");
 const verso = carta_container.querySelector(".verso");
 verso.classList.toggle("flip");
}


function informarNumerosCartas(){
   numeroCartas = prompt("Com quantas cartas quer jogar?");
    
    while((numeroCartas < 4) || (numeroCartas>14) ||(numeroCartas%2)!== 0){
        alert("Número inválido. Informe outro número");
        numeroCartas = prompt("Com quantas cartas quer jogar?");

    }

}
informarNumerosCartas();

vetorCartas = [ 'js/img/borboleta-192x192.png', 'js/img/flor-192x192.png', 'js/img/leão-192x192.png',
'js/img/lesma.png', 'js/img/penguim-.png','js/img/porco-192x192.png','js/img/unicornio-192x192.png',

]

function concatena(){
    for (let i=0; i<numeroCartas/2; i++){
       
        vetorCartas = vetorCartas.concat(vetorCartas);

    }
    vetorCartas.sort(comparador);
}
concatena();
function exibirCartas(){

let cartinha = document.querySelector('.container');
for (let i=0; i<numeroCartas; i++){

    cartinha.innerHTML+= ` 
    <div class="carta_container" onclick="virar(this)">
    <div class="carta verso" >
    <img src="${vetorCartas[i]}" alt="">
    </div>
    <div class="carta frente" >
    <img src="front 1.png" alt=""> 
    </div>
    </div>`  
}

}
exibirCartas();

function comparador() { 
	return Math.random() - 0.5; 
}


