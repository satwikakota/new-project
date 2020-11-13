
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
var gameState="START"; 

function preload()
{
	girlIMG=loadImage("images/sprite_0.png"); 
	clownIMG=loadImage("images/pngwing.com.png"); 
	obstacleIMG=loadImage("images/stones/tile000.png"); 
	doorIMG=loadImage("images/pngwing.com (10).png");
	fire1=loadAnimation("images/fire/fire1.png","images/fire/fire2.png","images/fire/fire3.png","images/fire/fire4.png","images/fire/fire5.png");
	
	}

function setup() {
	createCanvas(displayWidth, displayHeight-200);
	girl= createSprite(50,200,50,50); 
	girl.scale=0.5;
	girl.velocityY=2; 
	girl.velocityX=2; 
	girl.addImage("girlimg",girlIMG);

	door1=createSprite(200,320,20,20);
	door1.scale=0.12;
	door1.addImage("doorl",doorIMG);
	door1.rotation=90; 
	door1.rotateToDirection=true;
	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(gameState=="START"){
	background(0);
	fill("white");
	textSize(20);
	text("Press Space to Play",200,200); 
	if(keyDown("space")){
		gameState="LEVEL1";
	}
  }
  if(gameState=="LEVEL1"){
	background(0);
	girlControl();
	for(var pos=0;pos<obstaclearray.length;pos++){
		if(girl.isTouching(obstaclearray[pos])){
		  girl.x=random(0,40);
		  girl.y=random(0,20);
		} 
		obstaclearray[pos].debug=false;
		obstaclearray[pos].setCollider("rectangle",10,10,2,2);
	}
	spawnObstacles();
	if(girl.isTouching(door1)){
		gameState="LEVEL2";
		background(0);
		for(var pos=0;pos<obstaclearray.length;pos++){
			obstaclearray[pos].destroy();
	}
	}
	drawSprites();
  }
  else if(gameState=="LEVEL2"){
	  background(0);
	  text("GAME HAS CONTINUED TO LEVEL 2", 200,200); 
  }
  text(mouseX+","+mouseY,mouseX,mouseY);
}

function spawnObstacles(){
	for(var i=40; i<=800; i=i+200){
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
function girlControl(){
	if(keyDown("right")){
		girl.velocityX=10;
		girl.velocityY=0;
	  } 
	  if(keyDown("down")){
		girl.velocityX=0;
		girl.velocityY=10;
	  } 
	  if(keyDown("up")){
		girl.velocityX=0;
		girl.velocityY=-10;
	  } 
	  if(keyDown("left")){
		girl.velocityX=-10;
		girl.velocityY=0;
	  }
}
