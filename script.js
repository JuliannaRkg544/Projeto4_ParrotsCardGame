let numeroCartas;

function informarNumerosCartas(){
    numeroCartas = prompt("Com quantas cartas quer jogar?");
    
    while((numeroCartas < 4) || (numeroCartas>14) ||(numeroCartas%2)!== 0){
        alert("Número inválido. Informe outro número");
        numeroCartas = prompt("Com quantas cartas quer jogar?");

    }

}
informarNumerosCartas();

function distribuirCartas(){
    let container = document.querySelector('.carta_container');
    let cartinha = document.createElement('img');
    cartinha.src ='front 1.png';
    cartinha.classList.add('carta');
    container.appendChild(cartinha);
    
    for(let i=0; i<=numeroCartas; i++){

    }

}

distribuirCartas();
