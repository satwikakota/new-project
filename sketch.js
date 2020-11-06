
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girlIMG;
var girl; 
var clownIMG; 
var obstacleIMG; 
var obstaclearray=[]
var door; 
var doorIMG; 
function preload()
{
	girlIMG=loadImage("images/sprite_0.png"); 
	clownIMG=loadImage("images/pngwing.com.png"); 
	obstacleIMG=loadImage("images/stones/tile000.png"); 
	doorIMG=loadImage("images/pngwing.com (10).png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	girl= createSprite(50,200,50,50); 
	girl.scale=0.5;
	girl.velocityY=2; 
	girl.velocityX=2; 
	girl.addImage("girlimg",girlIMG);

	door=createSprite(474,320,20,20);
	door.scale=0.12;
	door.addImage("doorl",doorIMG);

	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("right")){
	girl.velocityX=2;
	girl.velocityY=0;
  } 
  if(keyDown("down")){
	girl.velocityX=0;
	girl.velocityY=2;
  } 
  if(keyDown("up")){
	girl.velocityX=0;
	girl.velocityY=-2;
  } 
  if(girl.isTouching(obstaclearray())){
	girl.setVelocityX=0;
	girl.setVelocityY=0;
  }
  spawnObstacles();
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function spawnObstacles(){
	for(var i=40; i<=800; i=i+100){
		obstaclearray.push(createSprite(150,i,20,20));
	}
	for(var y=60; y<= 550; y=y+150){
		obstaclearray.push(createSprite(300,y,20,20));
	}
	for(var l=60; l<= 250; l=l+600){
		obstaclearray.push(createSprite(300,l,20,20));
	}
	for(var f=70; f<= 650; f=f+200){
		obstaclearray.push(createSprite(400,f,20,20));
	}
	for(var x=0; x<obstaclearray.length; x++){
		obstaclearray[x].addImage("obstacle",obstacleIMG);
	}
}

