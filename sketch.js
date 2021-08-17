var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;


function preload(){
    // carregue o som aqui

}

function setup(){
    tela = createCanvas(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";
    
    bloco3 = createSprite(505,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(705,580,200,30);
    bloco4.shapeColor = "green";
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    
    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 5;
    bola.velocityY = -5;
}

function draw() {
    background(rgb(0));
    var arestas=createEdgeSprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola)){
        bola.shapeColor = "blue";
        bola.velocityX = 5;
        bola.velocityY = -5;
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 5;
        bola.velocityY = -5;
        //escreva o código para parar a música
    }

    //escreva o código de ricochete de bola para bloco3
       if(bloco3.isTouching(bola)){
        bola.shapeColor = "red";
        bola.velocityX = 5;
        bola.velocityY = -5;
       }
    //escreva o código de ricochete de bola para bloco4
       if(bloco4.isTouching(bola)){
        bola.shapeColor = "green";
        bola.velocityX = 5;
        bola.velocityY = -5;
       }
    drawSprites();
}