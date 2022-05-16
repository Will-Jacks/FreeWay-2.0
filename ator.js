let xAtor = 100;
let yAtor = 367;
let comprimentoAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;

function movimentaAtor(){
    if( keyIsDown (UP_ARROW) ){
      yAtor -=3;
    }
    if( keyIsDown (DOWN_ARROW) ){
      yAtor +=3;
    }
  }
  
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
  }

function verificaColisao(){
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[0], alturaCarros[0], xAtor, yAtor, 15)
        if(colisao){
            colidiu();
            somDaColisao.play();
            if(meusPontos > 0){
              meusPontos-=1;
            }
        };
    }
}

function colidiu(){
    yAtor = 367;
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/2 , 27);
}

function marcaPonto() {
  if(yAtor < 4) {
    meusPontos++;
    somDoPonto.play();
    colidiu();

  }
  if(yAtor > 367) {
    colidiu();
  }
}