let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 152, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 2.3, 3.3];
let alturaCarros = [40];
let comprimentoCarros = [60];

function mostraCarros(){
    for(var i=0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[0], alturaCarros[0]);
    }
  }

  function movimentaCarros(){
    
    for( let i=0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }

  }

function voltaPosicaoInicialDoCarro(){

    for(let i = 0; i < xCarros.length; i++){
        if(xCarros[i] < (-45)){
            xCarros[i] = 600;
        }
    }
}