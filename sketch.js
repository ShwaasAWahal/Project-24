
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Ground Body
	ground = new Ground(400,650,800,20)

	//Dustbin Bodies
	dustbinGround = new Dustbin(650,630,200,20)
	dustbinLeft = new Dustbin(540,590,20,100)
	dustbinRight = new Dustbin(760,590,20,100)

	//Paper Body
	paperObject = new Paper(150,625)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  //Display Bodies
  ground.display();

  dustbinGround.display();
  dustbinLeft.display();
  dustbinRight.display();

  paperObject.display();

  if(keyDown(UP_ARROW)){
	Body.applyForce(paperObject.body,paperObject.body.position,{x:15,y:-15})
}


}




