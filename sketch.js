
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
	paper = new Paper(100,658,70/2);
	
	box1 = new Dustbin(580,625,20,100);
    box2 = new Dustbin(750,625,20,100);
	box3 = new Dustbin(665,665,150,20);
	
	ground = new Ground(400,675,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  keyPressed();
   
  drawSprites();
 
}

function keyPressed() {
	if(keyWentDown(UP_ARROW)) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-40});
		paper.y = paper.y+70;
	} 
}



