
var trex ,trex_running;
var groundImage,ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running);
 trex.scale =0.5

 ground = createSprite(300,185,600,20)
 ground.addImage(groundImage)
 ground.x = ground.width/2
 ground.velocityX = -4
}

function draw(){
  background("skyblue")
  
//reset the ground
if(ground.x < 0){
  ground.x = ground.width/2
}
  if(keyDown("space")){
    trex.velocityY= -16
  }

  //adding gravity
  trex.velocityY = trex.velocityY + 0.8

  trex.collide(ground)
drawSprites()
}
