let numeroCartas;
let vetorCartas = [];

function virarCartas(carta) {
    let frente = carta.querySelector(".frente");
    frente.classList.toggle("flip");
    const verso = carta.querySelector(".verso");
    verso.classList.toggle("flip");

}

let paresFormados = 0;
let contaJogadas = 0;

function virar(carta_container) {
    if (segundaCarta !== null) {
        return
    }
    if(primeiraCarta!==null && primeiraCarta===carta_container){
        return
    }
    if(carta_container.classList.contains("parFormado")){
        return
    }
    contaJogadas += 1;
    if (primeiraCarta === null) {
        primeiraCarta = carta_container;

    } else {
        segundaCarta = carta_container;
    }


    virarCartas(carta_container);

    if (segundaCarta !== null) {
        let imgPrimeiraCarta = primeiraCarta.querySelector(".verso img");
        let imgSegundaCarta = segundaCarta.querySelector(".verso img");

        if (imgPrimeiraCarta.src === imgSegundaCarta.src && primeiraCarta!==segundaCarta) {
            primeiraCarta.classList.add("parFormado");
            segundaCarta.classList.add("parFormado");
            primeiraCarta = null;
            segundaCarta = null;
            paresFormados += 1;

            if (paresFormados === numeroCartas / 2) {
                alert(`Você ganhou em ${contaJogadas} jogadas!`);
            }

        } else {
            setTimeout(desvirarCartas, 1000);

        }
    }

}

function desvirarCartas() {
    virarCartas(primeiraCarta);

    virarCartas(segundaCarta);

    primeiraCarta = null;
    segundaCarta = null;

}

let primeiraCarta = null, segundaCarta = null;




vetorCartas = ['img/borboleta-192x192.png', 'img/flor-192x192.png', 'img/leão-192x192.png',
    'img/lesma.png', 'img/penguim-.png', 'img/porco-192x192.png', 'img/unicornio-192x192.png',
];
vetorCartas.sort(comparador);



function informarNumerosCartas() {
    numeroCartas = prompt("Com quantas cartas quer jogar?");

    while ((numeroCartas < 4) || (numeroCartas > 14) || (numeroCartas % 2) !== 0) {
        alert("Número inválido. Informe outro número");
        numeroCartas = prompt("Com quantas cartas quer jogar?");

    }

}
informarNumerosCartas();

let cartas = [];

for (let i = 0; i < numeroCartas / 2; i++) {
    cartas[2 * i] = vetorCartas[i];
    cartas[(2 * i) + 1] = vetorCartas[i];
    cartas.sort(comparador);
}


let cartinha = document.querySelector('.container');
for (let i = 0; i < numeroCartas; i++) {
    cartinha.innerHTML += ` 
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
  