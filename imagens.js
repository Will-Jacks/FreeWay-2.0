let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemCarros;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("material/estrada.png");
    imagemDoAtor = loadImage("material/ator-1.png");
    imagemDoCarro1 = loadImage("material/carro-1.png");
    imagemDoCarro2 = loadImage("material/carro-2.png");
    imagemDoCarro3 = loadImage("material/carro-3.png");
    imagemCarros = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2,imagemDoCarro3];

    somDaTrilha = loadSound('material/sons/trilha.mp3');
    somDaColisao = loadSound('material/sons/colidiu.mp3');
    somDoPonto = loadSound('material/sons/pontos.wav');
}