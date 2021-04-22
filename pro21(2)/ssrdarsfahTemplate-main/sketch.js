var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music= loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3= createSprite(515,580,200,30)
    block3.shapeColor= "red"

    block4= createSprite(730,580,200,30)
    block4.shapeColor="green"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY=-4
    ball.velocityX=-4
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(isTouching(block1,ball)){
        ball.shapeColor = "blue";
        //music.play();
        //ball.velocityX=ball.velocityX*(-1)
        ball.velocityY=ball.velocityY*(-1)
    }



    if(isTouching(block2,ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        //ball.velocityY=ball.velocityY*(-1)
        ball.velocityX=0
        ball.velocityY=0
        //write code to stop music
        music.stop()
    }

    //write code to bounce off ball from the block3
    if(isTouching(block3,ball)){
        ball.shapeColor="red"
        //ball.velocityX=ball.velocityX*(-1)
        ball.velocityY=ball.velocityY*(-1)
        //music.play()
        }

    //write code to bounce off ball from the block4
    if(isTouching(block4,ball)){
        ball.shapeColor="green"
        //music.play()
        //ball.velocityX=ball.velocityX*(-1)
        ball.velocityY=ball.velocityY*(-1)
        }

    drawSprites();
}

function isTouching(obj1,obj2){
    if(obj1.width/2+obj2.width/2>obj1.x-obj2.x
      &&obj1.width/2+obj2.width/2>obj2.x-obj1.x
      &&obj1.height/2+obj2.height/2>obj1.y-obj2.y
      &&obj1.height/2+obj2.height/2>obj2.y-obj1.y){
      return true
    }
    else{return false}
}
