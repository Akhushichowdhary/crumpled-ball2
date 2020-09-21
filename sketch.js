
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var ground;
var wall1;



function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 ball1 = new PaperBall(100,500,40);
 
 wall1 = new DustBin(700,600,20,20);
 //wall2 = new DustBin(600,600,20,20);
 //wall3 = new DustBin(100,600,20,20);

 
 ground = new Ground(400,690,800,20);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("pink");

  
 ground.display();
 ball1.display();
 wall1.display();
 
 
 
 
 

drawSprites();


 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-55});
	}
}


