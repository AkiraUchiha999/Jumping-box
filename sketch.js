var canvas;
var music;
var r1,r2,r3,r4,box;
var b1,b2,b3,b4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
b1=createSprite(790,200,5,800)
b2=createSprite(10,200,5,800)
b3=createSprite(400,590,800,5)
b4=createSprite(790,10,8000,5)



    //create 4 different surfaces
    r1=createSprite(100,590,150,15)
    r1.shapeColor="magenta"
    r2=createSprite(300,590,150,15)
    r2.shapeColor="purple"
    r3=createSprite(500,590,150,15)
    r3.shapeColor="red"
    r4=createSprite(700,590,150,15)
    r4.shapeColor="olive"

    createEdgeSprites()

    //create box sprite and give velocity
 box=createSprite(random(20,750),50,30,30)
 box.scale=1
 box.shapeColor="white"
 box.velocityX=5
 box.velocityY=5
 }

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box.bounceOff(b1)
box.bounceOff(b2)
box.bounceOff(b3)
box.bounceOff(b4)

    //add condition to check if box touching surface and make it box
    if (r1.isTouching(box) && box.bounceOff(r1)){
        box.shapeColor="magenta"
    }
    if (r2.isTouching(box) && box.bounceOff(r2)){
        box.shapeColor="purple"
        music.play();
    }
    if (r3.isTouching(box) && box.bounceOff(r3)){
        box.shapeColor="red"
    }
    if (r4.isTouching(box) && box.bounceOff(r4)){
        box.shapeColor="olive"
        music.play();
    }

 
    drawSprites();
}
